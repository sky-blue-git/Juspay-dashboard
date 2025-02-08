import React from "react";
import "./Header.css";
import { Search, WbSunny, Notifications, ChatBubble, Dashboard } from "@mui/icons-material";

const Header = ({ toggleTheme }) => {
  return (
    <div className="header">
      <div className="toolbar">
        {/* Left Side */}
        <div className="left">
          <button className="icon">
            <Dashboard fontSize="small" />
          </button>
          <span className="breadcrumb">Dashboards / Default</span>
        </div>

        {/* Center: Search Box */}
        <div className="search-box">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        {/* Right Side */}
        <div className="right">
          <button className="icon" onClick={toggleTheme}>
            <WbSunny fontSize="small" />
          </button>
          <button className="icon">
            <ChatBubble fontSize="small" />
          </button>
          <button className="icon">
            <Notifications fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
