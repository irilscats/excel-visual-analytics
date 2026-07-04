from app.inspection import compare_schemas, infer_type, inspect_file


def test_infer_types() -> None:
    assert infer_type([1, 2, 3]) == "integer"
    assert infer_type([1.2, 2.4]) == "number"
    assert infer_type(["10%", "20%"]) == "percentage"


def test_inspect_csv() -> None:
    result = inspect_file("sales.csv", "month,amount\nJan,120\nFeb,150\n".encode())
    sheet = result["sheets"][0]
    assert sheet["row_count"] == 2
    assert [column["name"] for column in sheet["columns"]] == ["month", "amount"]
    assert result["checksum"]


def test_schema_diff_detects_added_column() -> None:
    previous = inspect_file("old.csv", "month,amount\nJan,120\n".encode())["sheets"]
    current = inspect_file("new.csv", "month,amount,profit\nJan,120,30\n".encode())["sheets"]
    diff = compare_schemas(previous, current)
    assert len(diff["added"]) == 1
    assert diff["compatible"] is True
