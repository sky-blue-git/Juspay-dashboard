import React, { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { KeyboardArrowRight } from "@mui/icons-material";

const dashboardItems = [
  { id: 1, icon: <DashboardOutlinedIcon fontSize="xsmall" />, label: "Default" },
  { id: 2, icon: <ShoppingCartOutlinedIcon fontSize="xsmall" />, label: "eCommerce" },
  { id: 3, icon: <FolderOutlinedIcon fontSize="xsmall" />, label: "Projects" },
  { id: 4, icon: <BookOutlinedIcon fontSize="xsmall" />, label: "Online Courses" },
];

const Dashboards = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div style={{ height: "168px", width: "180px" }}>
      <p style={{ fontSize: "14px", color: "var(--black40)", padding: "4px 12px", lineHeight: "20px", marginBottom: "4px" }}>
        Dashboards
      </p>
      <ul>
        {dashboardItems.map((item) => (
          <li
            key={item.id}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              paddingLeft: activeItem === item.id ? "20px" : null,
              background: activeItem === item.id ? "var(--dark-opacity)" : null,
              position: "relative",
              marginBottom: "4px",
            }}
            onClick={() => handleItemClick(item.id)}
          >
            {activeItem === item.id && (
              <div
                style={{
                  position: "absolute",
                  left: "0px",
                  height: "16px",
                  width: "4px",
                  backgroundColor: "var(--primary-brand)",
                  borderRadius: "2px",
                }}
              />
            )}

            <div style={{ display: "flex", alignItems: "center", padding: "4px 8px" }}>
              {activeItem !== item.id ? <KeyboardArrowRight fontSize="small" sx={{ color: "var(--black20)" }} /> : null}
              {item.icon}
              <span style={{ marginLeft: "4px", fontSize: "14px", lineHeight: "20px" }}>{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboards;