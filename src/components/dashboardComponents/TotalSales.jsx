import React from "react";
import { Card, CardContent } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#1C1C1C" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

const TotalSales = () => {
  return (
    <Card style={{ width: "220px", background: "#f8f9fa", borderRadius: "12px", padding: "16px", textAlign: "left" }}>
      <CardContent>
        <p style={{ fontWeight: 600, marginBottom: "12px", fontSize: "16px" }}>Total Sales</p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
          <PieChart width={120} height={120}>
            <Pie data={data} cx="50%" cy="50%" innerRadius={35} outerRadius={50} dataKey="value" stroke="none">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", marginRight: "8px", backgroundColor: item.color }}></span>
              <p style={{ flexGrow: 1, fontSize: "14px", color: "#333", margin: 0 }}>{item.name}</p>
              <p style={{ fontSize: "14px", fontWeight: "bold", margin: 0 }}>${item.value.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalSales;
