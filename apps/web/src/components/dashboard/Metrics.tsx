import { metrics } from '../../dashboardData';

function Metrics() {
  return <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 12 }}>{metrics.map((item) => <article key={item.label} style={{ padding: 14, border: '1px solid rgb(22, 64, 105)', borderRadius: 10, background: 'rgb(9, 34, 59)' }}><small>{item.label}</small><strong style={{ display: 'block', margin: '8px 0', color: 'rgb(61, 225, 231)', fontSize: 23 }}>{item.value}</strong><span style={{ color: 'rgb(55, 222, 180)', fontSize: 11 }}>{item.change}</span></article>)}</section>;
}

export default Metrics;
