from __future__ import annotations

import csv
from io import BytesIO, StringIO, TextIOWrapper
from pathlib import Path
from typing import Any

from openpyxl import load_workbook

ALLOWED_EXTENSIONS = {".xlsx", ".csv"}
MAX_FILE_SIZE = 20 * 1024 * 1024


def infer_type(values: list[Any]) -> str:
    samples = [value for value in values if value not in (None, "")][:50]
    if not samples:
        return "text"
    if all(isinstance(value, bool) for value in samples):
        return "boolean"
    if all(isinstance(value, int) and not isinstance(value, bool) for value in samples):
        return "integer"
    if all(isinstance(value, (int, float)) and not isinstance(value, bool) for value in samples):
        return "number"
    if all(hasattr(value, "isoformat") for value in samples):
        return "datetime"
    return "text"


def inspect_csv(content: bytes, preview_rows: int) -> dict[str, Any]:
    stream = TextIOWrapper(BytesIO(content), encoding="utf-8-sig", newline="")
    rows = list(csv.reader(stream))
    if not rows:
        return {"sheets": [{"name": "CSV", "columns": [], "preview": [], "row_count": 0}]}
    headers = [value or f"Column {index + 1}" for index, value in enumerate(rows[0])]
    data_rows = rows[1:]
    columns = []
    for index, header in enumerate(headers):
        values = [row[index] if index < len(row) else None for row in data_rows]
        columns.append({"name": header, "type": infer_type(values), "index": index})
    preview = [dict(zip(headers, row, strict=False)) for row in data_rows[:preview_rows]]
    return {"sheets": [{"name": "CSV", "columns": columns, "preview": preview, "row_count": len(data_rows)}]}


def inspect_xlsx(content: bytes, preview_rows: int) -> dict[str, Any]:
    workbook = load_workbook(BytesIO(content), read_only=True, data_only=True)
    sheets: list[dict[str, Any]] = []
    for worksheet in workbook.worksheets:
        rows = list(worksheet.iter_rows(values_only=True))
        if not rows:
            sheets.append({"name": worksheet.title, "columns": [], "preview": [], "row_count": 0})
            continue
        headers = [str(value) if value not in (None, "") else f"Column {index + 1}" for index, value in enumerate(rows[0])]
        data_rows = rows[1:]
        columns = []
        for index, header in enumerate(headers):
            values = [row[index] if index < len(row) else None for row in data_rows]
            columns.append({"name": header, "type": infer_type(values), "index": index})
        preview = [dict(zip(headers, row, strict=False)) for row in data_rows[:preview_rows]]
        sheets.append({"name": worksheet.title, "columns": columns, "preview": preview, "row_count": len(data_rows)})
    return {"sheets": sheets}


def inspect_file(filename: str, content: bytes, preview_rows: int = 20) -> dict[str, Any]:
    extension = Path(filename).suffix.lower()
    if extension not in ALLOWED_EXTENSIONS:
        raise ValueError("Only .xlsx and .csv files are supported in the first milestone")
    if len(content) > MAX_FILE_SIZE:
        raise ValueError("The uploaded file exceeds the 20 MB milestone limit")
    result = inspect_csv(content, preview_rows) if extension == ".csv" else inspect_xlsx(content, preview_rows)
    return {"filename": filename, "size": len(content), **result}
