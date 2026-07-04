from __future__ import annotations

import json
import os
from pathlib import Path
from typing import Any


class JsonStore:
    def __init__(self, root: str | Path | None = None) -> None:
        self.root = Path(root or os.getenv("DATA_DIRECTORY", ".local-data"))
        self.root.mkdir(parents=True, exist_ok=True)

    def save_dashboard(self, dashboard_id: str, payload: dict[str, Any]) -> dict[str, Any]:
        target = self.root / "dashboards"
        target.mkdir(parents=True, exist_ok=True)
        path = target / f"{dashboard_id}.json"
        document = {"id": dashboard_id, **payload}
        temporary = path.with_suffix(".tmp")
        temporary.write_text(json.dumps(document, ensure_ascii=False, indent=2), encoding="utf-8")
        temporary.replace(path)
        return document

    def load_dashboard(self, dashboard_id: str) -> dict[str, Any] | None:
        path = self.root / "dashboards" / f"{dashboard_id}.json"
        return json.loads(path.read_text(encoding="utf-8")) if path.exists() else None
