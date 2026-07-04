const button = { padding: '8px 12px', border: '1px solid rgb(35, 79, 125)', borderRadius: 8, color: 'white', background: 'rgb(10, 34, 59)' };

function Header() {
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div><small style={{ color: 'rgb(54, 162, 255)', letterSpacing: 2 }}>EXCEL VISUAL ANALYTICS</small><h1 style={{ margin: '4px 0' }}>销售经营分析大屏</h1></div>
        <div style={{ display: 'flex', gap: 8 }}><button style={button}>更新数据</button><button style={{ ...button, background: 'rgb(37, 126, 246)' }}>保存大屏</button></div>
      </header>
      <section style={{ display: 'flex', gap: 14, padding: 12, marginBottom: 12, border: '1px solid rgb(22, 64, 105)', borderRadius: 10, background: 'rgb(7, 27, 49)', fontSize: 12 }}>
        <span>时间范围：2024-01-01 至 2024-12-31</span><span>区域：全部</span><span>产品类别：全部</span>
      </section>
    </>
  );
}

export default Header;
