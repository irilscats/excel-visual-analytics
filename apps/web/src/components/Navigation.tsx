import { layoutStyles } from '../styles';

const items = ['工作台', '数据源管理', '数据分析', '仪表盘管理', '大屏管理', '数据刷新', '系统管理'];

function Navigation() {
  return (
    <aside style={layoutStyles.sidebar}>
      <strong>数据分析平台</strong>
      <nav>{items.map((label) => <button key={label}>{label}</button>)}</nav>
    </aside>
  );
}

export default Navigation;
