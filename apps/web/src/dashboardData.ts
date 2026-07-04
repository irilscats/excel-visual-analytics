export const metrics = [
  { label: '销售额（元）', value: '8,265,732', change: '+12.45%' },
  { label: '利润（元）', value: '1,258,952', change: '+8.21%' },
  { label: '订单数（个）', value: '12,568', change: '+15.72%' },
  { label: '客户数（个）', value: '3,682', change: '+6.35%' }
];

export const products = [
  ['智能手机', '1,245,300', '1,256', '245,300'],
  ['笔记本电脑', '998,700', '856', '198,700'],
  ['平板电脑', '668,400', '642', '128,400'],
  ['耳机', '456,800', '1,256', '56,800'],
  ['办公椅', '345,600', '654', '45,600'],
  ['打印机', '321,400', '321', '41,400'],
  ['显示器', '289,600', '654', '39,600'],
  ['键盘', '256,300', '1,025', '36,300']
];

const axisLabel = { color: '#8ca5c9' };
const splitLine = { lineStyle: { color: 'rgba(67,112,164,.22)' } };

export const lineOption = {
  tooltip: { trigger: 'axis' },
  grid: { left: 54, right: 20, top: 28, bottom: 36 },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    axisLabel
  },
  yAxis: { type: 'value', axisLabel, splitLine },
  series: [{
    name: '销售额',
    type: 'line',
    smooth: true,
    symbolSize: 7,
    data: [820000, 640000, 510000, 980000, 660000, 720000, 1210000, 940000, 680000, 860000, 1170000, 980000],
    lineStyle: { width: 3, color: '#2c8cff' },
    itemStyle: { color: '#65d8ff' },
    areaStyle: { color: 'rgba(44,140,255,.16)' }
  }]
};

export const barOption = {
  tooltip: { trigger: 'axis' },
  grid: { left: 50, right: 18, top: 28, bottom: 38 },
  xAxis: { type: 'category', data: ['华东', '华南', '华北', '西南', '西北', '东北'], axisLabel },
  yAxis: { type: 'value', axisLabel, splitLine },
  series: [{
    type: 'bar',
    barWidth: 28,
    data: [235, 168, 132, 108, 98, 85],
    itemStyle: { borderRadius: [5, 5, 0, 0], color: '#2c8cff' },
    label: { show: true, position: 'top', color: '#d9e9ff' }
  }]
};

export const pieOption = {
  tooltip: { trigger: 'item' },
  legend: { orient: 'vertical', right: 4, top: 'center', textStyle: axisLabel },
  series: [{
    type: 'pie',
    radius: ['45%', '72%'],
    center: ['34%', '52%'],
    label: { show: false },
    data: [
      { value: 35.6, name: '电子产品' },
      { value: 24.3, name: '办公用品' },
      { value: 18.9, name: '家居用品' },
      { value: 12.6, name: '服装鞋包' },
      { value: 8.6, name: '其他' }
    ]
  }]
};

export const customerOption = {
  tooltip: { trigger: 'axis' },
  grid: { left: 76, right: 28, top: 24, bottom: 30 },
  xAxis: { type: 'value', axisLabel, splitLine },
  yAxis: { type: 'category', data: ['其他', '政府机构', '个人客户', '企业客户'], axisLabel },
  series: [{
    type: 'bar',
    barWidth: 20,
    data: [214, 356, 1256, 1856],
    itemStyle: { borderRadius: [0, 5, 5, 0], color: '#2c8cff' },
    label: { show: true, position: 'right', color: '#d9e9ff' }
  }]
};
