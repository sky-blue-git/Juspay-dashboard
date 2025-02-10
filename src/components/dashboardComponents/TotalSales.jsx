import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "var(--primary-brand)" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

const TotalSales = () => {
  return (
    <div
      style={{
        minWidth: "200px",
        maxWidth: "272px",
        width: "100%",
        height: "336px",
        marginTop: "28px",
        background: "var(--primary-light)",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <p style={{ fontWeight: 600, marginBottom: "16px", fontSize: "14px" }}>
        Total Sales
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            dataKey="value"
            stroke="var(--primary-light)"
            strokeWidth={6} 
            cornerRadius={10} 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                marginRight: "8px",
                backgroundColor: item.color,
              }}
            ></span>
            <p style={{ flexGrow: 1, fontSize: "12px" }}>{item.name}</p>
            <p style={{ fontSize: "12px" }}>${item.value.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
