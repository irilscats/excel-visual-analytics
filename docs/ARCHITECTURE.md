# 技术架构

## 架构原则

MVP 采用模块化单体，先保证业务闭环、开发效率和数据正确性，再根据负载拆分服务。

## 系统组成

### Web 应用

- React + TypeScript；
- Apache ECharts；
- 分析工作台、仪表盘编辑器和自由大屏编辑器；
- 前端只保存配置，不保存计算结果作为唯一事实来源。

### API 服务

- FastAPI；
- 项目、数据源、字段模型、分析对象、仪表盘和大屏接口；
- 负责权限校验、任务编排和配置持久化。

### Worker

- Excel/CSV 解析；
- 字段推断、数据剖析与清洗；
- 数据版本校验与字段差异检测；
- 大型查询、导出和缩略图生成。

### 数据与存储

- PostgreSQL：业务实体、字段元数据和 JSONB 配置；
- Redis：任务队列、任务进度和短期缓存；
- S3 兼容对象存储：原始文件、版本文件和导出结果；
- DuckDB / Polars：文件级筛选、聚合和分析执行。

## 核心实体

- `Project`
- `DataSource`
- `DataVersion`
- `Sheet`
- `Field`
- `FieldMapping`
- `TransformStep`
- `Analysis`
- `Dashboard`
- `CanvasPage`
- `Widget`
- `Filter`
- `RefreshJob`

## 配置分离

每个可视化对象拆分为三类配置：

1. 数据配置：数据源、字段、聚合、筛选、排序；
2. 表现配置：图表类型、颜色、坐标轴、标签、字体；
3. 布局配置：位置、尺寸、层级、锁定和响应式策略。

数据更新只重新执行数据配置，不改变表现和布局配置。

## 推荐仓库结构

```text
apps/
  web/
  api/
  worker/
packages/
  chart-schema/
  query-schema/
  ui/
  shared-types/
infra/
  docker/
  migrations/
docs/
tests/
```

## 关键非功能要求

- 文件解析必须异步执行；
- 所有刷新任务应幂等；
- 活动数据版本切换必须原子化；
- 图表查询必须设置行数、时间和内存限制；
- 上传文件需要扩展名、MIME、大小和内容校验；
- 服务端不执行 Excel 宏和外部链接。
