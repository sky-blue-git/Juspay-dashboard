import React from "react";
import { Search, WbSunny, Notifications, ChatBubble, Dashboard, StarBorder } from "@mui/icons-material";
import "./Header.css";

const Header = ({ toggleTheme }) => {
  return (
    <div className="header">
      <div className="toolbar">
        <div className="left">
          <button className="icon">
            <Dashboard fontSize="small" />
          </button>
          <button className="icon">
            <StarBorder fontSize="small" />
          </button>
          <span>Dashboards</span>
          <span>/</span>
          <span>Default</span>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="search-box">
            <Search className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
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
