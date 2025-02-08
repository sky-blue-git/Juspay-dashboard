import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import BookIcon from "@mui/icons-material/Book";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const SidebarDashboard = () => {
  return (
    <div>
      <div className="section-title">Dashboards</div>
      <ul className="menu">
        <li className="active">Default</li>
        <li><FaShoppingCart /> eCommerce</li>
        <li><FaFolder /> Projects</li>
        <li><FaBookOpen /> Online Courses</li>
      </ul>
    </div>
  );
};

export default SidebarDashboard;
