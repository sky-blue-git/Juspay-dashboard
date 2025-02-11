import React from "react";
import { LinearProgress } from "@mui/material";
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
        width: "100%",
        minWidth: "200px",
        maxWidth: "272px",
        height: "318px",
        background: "var(--primary-light)",
        borderRadius: "12px",
        padding: "24px",
        textAlign: "left",
      }}
    >
        <p style={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px" }}>
          Revenue by Location
        </p>
        <div style={{display: "flex", marginBottom: "16px", marginTop: "16px", justifyContent: "center"}}>
          <img
            src={WorldMap}
            alt="World Map"
            height="82px"
          />
        </div>
        {data.map((item) => (
          <div key={item.city} style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
            <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between", fontSize: "12px", height: "20px", lineHeight: "18px",  color:"var(--black100)" }}>
              <p>{item.city}</p>
              <p>
                {item.revenue}K
              </p>
            </div>
            <LinearProgress
              variant="determinate"
              value={(item.revenue / 100) * 100}
              sx={{
                height: "2px",
                borderRadius: "1px",
                backgroundColor: "#A8C5DA80",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#A8C5DA",
                  borderRadius: "1px",
                },
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default RevenueByLocation;
