import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const rawData = [
  { name: 'Jan', projections: 22, actuals: 17 },
  { name: 'Feb', projections: 27, actuals: 22 },
  { name: 'Mar', projections: 23, actuals: 18 },
  { name: 'Apr', projections: 29, actuals: 23 },
  { name: 'May', projections: 19, actuals: 16 },
  { name: 'Jun', projections: 26, actuals: 22 },
];

const data = rawData.map((d) => ({
  ...d,
  difference: d.projections - d.actuals,
}));

const ProjectionsVsActualsChart = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: "var(--primary-light)",
      width: "432px", 
      minWidth: "400px",
      height: "252px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "16px",
    }}>
      <p style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px", color: "var(--black100)" }}>
        Projections vs Actuals
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 0, left: -10, bottom: 0 }} barSize={20}>
          <CartesianGrid horizontal={true} vertical={false} stroke="var(--black10)" />
          <YAxis
            axisLine={false} 
            tickLine={false} 
            tickFormatter={(value) => `${value}M`} 
            tick={{ fill: "var(--black40)", fontSize: 12 }} 
            tickCount={4} 
          />

          <XAxis 
            dataKey="name" 
            tick={{ fill: "var(--black40)", fontSize: 12 }} 
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="actuals" fill="var(--secondary-cyan)" stackId="1"/>
          <Bar dataKey="difference" fill="var(--secondary-cyan2)" stackId="1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsVsActualsChart;
