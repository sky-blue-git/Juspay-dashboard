import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueLegendItem = ({ color, label, amount }) => {
  return (
    <span style={{ display: "flex", alignItems: "center", marginRight: "8px", color: "var(--black100)" }}>
      <span style={{ width: "6px", height: "6px", backgroundColor: color, borderRadius: "50%", marginRight: "5px" }}></span>
      <span>{label}</span>
      <span style={{ fontWeight: 600, marginLeft: "5px" }}>${amount}</span>
    </span>
  );
};

const RevenueChart = () => {
  const data = [
    { name: 'Jan', currentWeek: 10, previousWeek: 15, thirdLine: null },
    { name: 'Feb', currentWeek: 18, previousWeek: 10, thirdLine: null },
    { name: 'Mar', currentWeek: 16, previousWeek: 12, thirdLine: null },
    { name: 'Apr', currentWeek: 13, previousWeek: 15, thirdLine: 15 },
    { name: 'May', currentWeek: 14, previousWeek: null, thirdLine: 20 },
    { name: 'Jun', currentWeek: 22, previousWeek: null, thirdLine: 23 },
  ];

  return (
    <div
      style={{
        padding: "24px",
        marginTop: "28px",
        height: "318px",
        minWidth: "662px",
        width: "100%",
        backgroundColor: "var(--primary-light)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", fontSize: "14px", color: "var(--black100)", gap: "16px" }}>
        <span style={{ fontSize: "14px", fontWeight: '600' }}>Revenue</span>
        <span style={{ color: "var(--black20)", marginRight: "8px" }}> | </span>
        <RevenueLegendItem color="var(--black100)" label="Current Week" amount="58,211" />
        <RevenueLegendItem color="var(--secondary-cyan)" label="Previous Week" amount="68,768" />
      </div>
      <ResponsiveContainer width="100%">
        <LineChart
          data={data}
          margin={{ top: 30, right: 0, left: -20, bottom: 0 }}
        >
          <CartesianGrid 
            horizontal={true} 
            vertical={false} 
            stroke="var(--dark-opacity)" 
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: 'var(--black20)' }}
            tick={{ fill: 'var(--black40)', fontSize: 12, dy:8 }}
            tickLine={false} 
            padding={{ left: 48, right: 48 }}
          />
          <YAxis
            domain={[0, 30]}
            tickCount={4} 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--black40)', fontSize: 12, dx: -8, dy:-6 }}
            tickFormatter={(value) => value === 0 ? '0' : `${value}M`} 
          />

          <Tooltip />
          <Line
            type="natural"
            dataKey="currentWeek"
            stroke="var(--secondary-cyan)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="natural"
            dataKey="previousWeek"
            stroke="var(--black100)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="natural"
            dataKey="thirdLine"
            stroke="var(--black100)"
            strokeWidth={2}
            strokeDasharray="6 6" 
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;