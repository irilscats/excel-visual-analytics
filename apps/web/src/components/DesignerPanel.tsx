const componentNames = ['指标卡', '折线图', '柱状图', '饼图', '地图', '表格'];

function DesignerPanel() {
  return (
    <aside className="designer-panel">
      <section className="designer-section">
        <div className="designer-heading"><span>大屏设计器</span><small>保存布局与样式</small></div>
        <div className="mini-canvas"><div className="mini-header"></div><div className="mini-grid"><div></div><div></div><div></div><div></div></div></div>
      </section>
      <section className="designer-section">
        <div className="section-label">可视化组件</div>
        <div className="component-grid">{componentNames.map((name) => <button key={name} type="button">{name}</button>)}</div>
      </section>
      <section className="designer-section">
        <div className="section-label">数据更新机制</div>
        <ul className="feature-list"><li>手动上传更新</li><li>自动刷新图表</li><li>数据版本记录</li><li>字段差异检测</li></ul>
      </section>
    </aside>
  );
}

export default DesignerPanel;
