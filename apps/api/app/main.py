from typing import Any

from fastapi import Body, FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from app.inspection import inspect_file
from app.store import JsonStore

app = FastAPI(title="Excel Visual Analytics API", version="0.1.0")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
store = JsonStore()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "excel-visual-analytics-api"}


@app.post("/api/v1/files/inspect")
async def inspect_upload(file: UploadFile = File(...), preview_rows: int = 20) -> dict[str, Any]:
    content = await file.read()
    try:
        return inspect_file(file.filename or "upload", content, min(max(preview_rows, 1), 100))
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error


@app.put("/api/v1/dashboards/{dashboard_id}")
def save_dashboard(dashboard_id: str, payload: dict[str, Any] = Body(...)) -> dict[str, Any]:
    return store.save_dashboard(dashboard_id, payload)


@app.get("/api/v1/dashboards/{dashboard_id}")
def load_dashboard(dashboard_id: str) -> dict[str, Any]:
    dashboard = store.load_dashboard(dashboard_id)
    if dashboard is None:
        raise HTTPException(status_code=404, detail="仪表盘不存在")
    return dashboard
