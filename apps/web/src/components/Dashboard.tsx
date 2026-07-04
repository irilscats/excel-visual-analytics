import ReactECharts from 'echarts-for-react';
import { barOption, customerOption, lineOption, metrics, pieOption, products } from '../dashboardData';

function Dashboard() {
  return (
    <main className="workspace">
      <header className="topbar">
        <div><p className="eyebrow">EXCEL VISUAL ANALYTICS</p><h1>销售经营分析大屏</h1></div>
        <div className="top-actions"><button className="ghost-button">更新数据</button><button className="primary-button">保存大屏</button></div>
      </header>
      <section className="filter-bar">
        <label>时间范围 <button>2024-01-01 — 2024-12-31</button></label>
        <label>区域 <button>全部</button></label>
        <label>产品类别 <button>全部</button></label>
        <button className="refresh-button">刷新</button>
      </section>
      <section className="metric-grid">
        {metrics.map((metric) => <article className="metric-card" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>较上月 <em>↑ {metric.change}</em></small></article>)}
        <article className="metric-card metric-progress"><span>年度目标完成率</span><strong>82.6%</strong><div className="progress-track"><div className="progress-fill" /></div><small>目标 1,000 万元</small></article>
      </section>
      <section className="dashboard-grid">
        <article className="panel span-5"><h2>销售额趋势分析</h2><ReactECharts option={lineOption} style={{ height: 260 }} /></article>
        <article className="panel span-4"><h2>区域销售额对比</h2><ReactECharts option={barOption} style={{ height: 260 }} /></article>
        <article className="panel span-3"><h2>产品类别销售占比</h2><ReactECharts option={pieOption} style={{ height: 260 }} /></article>
        <article className="panel span-5 table-panel"><h2>销售明细 TOP 8</h2><div className="data-table-wrap"><table className="data-table"><thead><tr><th>排名</th><th>产品名称</th><th>销售额</th><th>订单数</th><th>利润</th></tr></thead><tbody>{products.map((row, index) => <tr key={row[0]}><td>{index + 1}</td>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></article>
        <article className="panel span-4 map-panel"><h2>全国销售热力分布</h2><div className="map-placeholder"><div className="map-symbol">中国</div><strong>地图组件</strong><span>后续接入省市级 GeoJSON 数据</span></div></article>
        <article className="panel span-3"><h2>客户类型分布</h2><ReactECharts option={customerOption} style={{ height: 270 }} /></article>
      </section>
    </main>
  );
}

export default Dashboard;
