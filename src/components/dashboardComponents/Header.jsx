import React from "react";
import { AppBar, Toolbar, Typography, IconButton, InputBase } from "@mui/material";
import { Search, WbSunny, Notifications, ChatBubble, Dashboard } from "@mui/icons-material";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        {/* Left Side */}
        <div className="left">
          <IconButton className="icon">
            <Dashboard fontSize="small" />
          </IconButton>
          <Typography variant="body2" className="breadcrumb">
            Dashboards / Default
          </Typography>
        </div>

        {/* Center: Search Box */}
        <div className="search-box">
          <Search className="search-icon" />
          <InputBase placeholder="Search" className="search-input" />
        </div>

        {/* Right Side */}
        <div className="right">
          <IconButton className="icon">
            <WbSunny fontSize="small" />
          </IconButton>
          <IconButton className="icon">
            <ChatBubble fontSize="small" />
          </IconButton>
          <IconButton className="icon">
            <Notifications fontSize="small" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
