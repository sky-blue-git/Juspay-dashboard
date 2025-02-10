import React from "react";
import {
  WbSunnyOutlined,
  HistoryOutlined,
  NotificationsOutlined,
  ChatBubbleOutline,
  DashboardOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import CustomSearch from "./CustomSearch"; // Import the CustomSearch component

const Header = ({ toggleTheme, theme, selected, setSelected }) => {
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
          <CustomSearch backgroundColor="var(--dark-opacity)" showSearch2={true} />

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