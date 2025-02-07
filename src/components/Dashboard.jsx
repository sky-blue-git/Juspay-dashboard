import React from "react";
import Sidebar from "./dashboardComponents/sidebar/SideBar";
import Header from "./dashboardComponents/Header";
import "./Dashboard.css";
import Graphs from "./dashboardComponents/Graphs";
import RightSidebar from "./dashboardComponents/right_sidebar/RightSidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Graphs />
      </div>
      <RightSidebar/>
    </div>
  );
};

export default Dashboard;
