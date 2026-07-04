const items = ['工作台', '数据源管理', '数据分析', '仪表盘管理', '大屏管理', '数据刷新', '系统管理'];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">X</div>
        <div><strong>数据分析平台</strong><span>Excel Intelligence</span></div>
      </div>
      <nav className="nav-list">
        {items.map((label) => (
          <button className={label === '大屏管理' ? 'nav-item active' : 'nav-item'} key={label} type="button">
            <span className="nav-dot" /><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="user-card"><div className="avatar">A</div><div><strong>用户</strong><span>项目管理员</span></div></div>
    </aside>
  );
}

export default Sidebar;
