import React from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";
import WorldMap from "../../assets/world-map.svg";

const data = [
  { city: "New York", revenue: 72 },
  { city: "San Francisco", revenue: 39 },
  { city: "Sydney", revenue: 25 },
  { city: "Singapore", revenue: 61 },
];

const RevenueByLocation = () => {
  return (
    <div
      style={{
        marginTop: "28px",
        width: "202px",
        minWidth: "200px",
        maxWidth: "272px",
        height: "318px",
        background: "#F7F9FB",
        borderRadius: "12px",
        padding: "16px",
        textAlign: "left",
      }}
    >
      <CardContent>
        <p style={{ fontSize: "14px", fontWeight: 600}}>
          Revenue by Location
        </p>
        <div style={{ marginBottom: "12px" }}>
          <img
            src={WorldMap}
            alt="World Map"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
        {data.map((item) => (
          <div key={item.city} style={{ display: "flex", flexDirection: "column", marginBottom: "12px" }}>
            <p style={{ fontSize: "14px", color: "#333", margin: 0 }}>{item.city}</p>
            <p style={{ fontSize: "14px", fontWeight: "bold", textAlign: "right", margin: 0 }}>
              {item.revenue}K
            </p>
            <LinearProgress
              variant="determinate"
              value={(item.revenue / 100) * 100}
              style={{ marginTop: "4px", height: "6px", borderRadius: "3px", backgroundColor: "#d0d0d0" }}
            />
          </div>
        ))}

      </CardContent>
    </div>
  );
};

export default RevenueByLocation;
