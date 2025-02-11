import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const rawData = [
  { name: 'Jan', projections: 22, actuals: 18 },
  { name: 'Feb', projections: 26, actuals: 21 },
  { name: 'Mar', projections: 23, actuals: 18 },
  { name: 'Apr', projections: 29, actuals: 23 },
  { name: 'May', projections: 19, actuals: 15 },
  { name: 'Jun', projections: 26, actuals: 21 },
];

const data = rawData.map((d) => ({
  ...d,
  difference: d.projections - d.actuals,
}));

const ProjectionsVsActualsChart = () => {
  return (
    <div style={{ 
      padding: '24px', 
      backgroundColor: "var(--primary-light)",
      width: "100%",
      minWidth: "400px",
      height: "252px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "16px",
    }}>
      <p style={{ fontSize: "14px", fontWeight: "600" }}>
        Projections vs Actuals
      </p>
      <ResponsiveContainer width="100%">
      <BarChart data={data} margin={{ top: 30, right: 0, left: -18, bottom: 0 }} barSize={20}>
          <CartesianGrid horizontal={true} vertical={false} stroke="var(--dark-opacity)" />
          <YAxis
            axisLine={false} 
            tickLine={false} 
            tickFormatter={(value) => value === 0 ? '0' : `${value}M`} 
            tick={{ fill: "var(--black40)", fontSize: 12, dx: -8, dy:-6 }} 
            tickCount={4} 
          />

          <XAxis 
            dataKey="name" 
            tick={{ fill: "var(--black40)", fontSize: 12, dy:8 }} 
            tickLine={false} 
            axisLine={{ stroke: "var(--black20)" }}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="actuals" fill="var(--secondary-cyan)" stackId="1"/>
          <Bar dataKey="difference" fill="var(--secondary-cyan2)" stackId="1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsVsActualsChart; 