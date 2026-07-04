# Excel 智能分析与可视化大屏平台

将 Excel/CSV 转换为可保存、可刷新、可复用的数据分析、仪表盘和可视化大屏。

## 当前里程碑

- 深色销售经营分析大屏原型
- 指标卡、折线图、柱状图、环形图、表格和设计器面板
- Excel/CSV 结构识别与字段类型推断 API
- 仪表盘 JSON 配置持久化 API
- 数据版本字段差异检测基础能力
- Web、API、Worker 工程骨架与 CI

## 本地启动

API：进入 `apps/api`，安装 `requirements.txt` 后运行 `uvicorn app.main:app --reload --port 8000`。

Web：运行 `pnpm install`，再运行 `pnpm dev:web`。

访问 `http://localhost:5173`，API 文档位于 `http://localhost:8000/docs`。

## 核心原则

可视化保存为数据绑定、分析逻辑、样式和布局配置，而不是静态截图。更新同结构数据后重新执行查询，页面布局保持不变。
