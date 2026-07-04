from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Excel Visual Analytics API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "excel-visual-analytics-api"}


@app.get("/api/v1/dashboard/demo")
def demo_dashboard() -> dict[str, object]:
    return {
        "metrics": [
            {"name": "销售额", "value": 8265732, "change": 12.45},
            {"name": "利润", "value": 1258952, "change": 8.21},
            {"name": "订单数", "value": 12568, "change": 15.72},
            {"name": "客户数", "value": 3682, "change": 6.35},
        ],
        "version": "demo-v1",
    }
