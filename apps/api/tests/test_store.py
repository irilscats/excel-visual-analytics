from app.store import JsonStore


def test_dashboard_round_trip(tmp_path) -> None:
    store = JsonStore(tmp_path)
    saved = store.save_dashboard("sales", {"title": "销售大屏", "widgets": ["trend"]})
    assert saved["id"] == "sales"
    assert store.load_dashboard("sales") == saved
