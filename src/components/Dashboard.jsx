import React, { useState } from "react";
import Sidebar from "./dashboardComponents/sidebar/SideBar";
import Header from "./dashboardComponents/Header";
import "./Dashboard.css";
import Graphs from "./dashboardComponents/Graphs";
import RightSidebar from "./dashboardComponents/right_sidebar/RightSidebar";

const Dashboard = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        {/* Pass toggleTheme function to Header */}
        <Header toggleTheme={toggleTheme} />
        <Graphs />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
