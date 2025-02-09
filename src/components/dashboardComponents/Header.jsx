import React, { useState } from "react";
import {
  SearchOutlined,
  WbSunnyOutlined,
  HistoryOutlined,
  NotificationsOutlined,
  ChatBubbleOutline,
  DashboardOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import search2 from "../../assets/search2.svg";

const Header = ({ toggleTheme, theme }) => {
  const [selected, setSelected] = useState("Dashboards"); 

  return (
    <div
      style={{
        padding: "20px 28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid var(--black10)",
        backgroundColor: "var(--background)",
      }}
      data-theme={theme}
    >
      <style>
        {`
          input::placeholder {
            color: var(--black20);
            opacity: 1; /* Ensure full opacity */
          }
        `}
      </style>

      <div style={{ display: "flex", width: "100%", maxWidth: "1200px", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px" }}>
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "5px" }}>
            <DashboardOutlined fontSize="small" style={{ color: "var(--black100)" }} />
          </button>
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "5px" }}>
            <StarBorderOutlined fontSize="small" style={{ color: "var(--black100)" }} />
          </button>
          
          <span 
            onClick={() => setSelected("Dashboards")} 
            style={{ 
              color: selected === "Dashboards" ? "var(--black40)" : "var(--icon-color)", 
              cursor: "pointer" 
            }}
          >
            Dashboards
          </span>
          <span style={{ color: "var(--black20)" }}>/</span>
          <span 
            onClick={() => setSelected("Default")} 
            style={{ 
              color: selected === "Default" ? "var(--black40)" : "var(--icon-color)", 
              cursor: "pointer" 
            }}
          >
            Default
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div 
            style={{
              display: "flex",
              backgroundColor: "var(--dark-opacity)",
              borderRadius: "8px",
              padding: "4px 8px",
              width: "160px",
            }}
          >
            <SearchOutlined style={{ color: "var(--black20)", fontSize: "16px" }} />
            <input
              type="text"
              placeholder="Search"
              style={{
                border: "none",
                outline: "none",
                fontSize: "14px",
                background: "none",
                color: "var(--black20)",
                marginLeft: "4px",
                width: "100%",
              }}
            />
            <img 
              src={search2} 
              alt="Search" 
              style={{
                width: "18px",
                height: "18px",
                marginLeft: "auto"
              }}
            />
          </div>

          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "5px" }} onClick={toggleTheme}>
            <WbSunnyOutlined fontSize="small" style={{ color: "var(--black100)" }} />
          </button>
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "5px" }}>
            <HistoryOutlined fontSize="small" style={{ color: "var(--black100)" }} />
          </button>
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "5px" }}>
            <NotificationsOutlined fontSize="small" style={{ color: "var(--black100)" }} />
          </button>
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "5px" }}>
            <ChatBubbleOutline fontSize="small" style={{ color: "var(--black100)" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;