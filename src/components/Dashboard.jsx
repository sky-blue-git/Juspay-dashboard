import React, { useState } from "react";
import Sidebar from "./dashboardComponents/sidebar/SideBar";
import Header from "./dashboardComponents/Header";
import "./Dashboard.css";
import Graphs from "./dashboardComponents/Graphs";
import RightSidebar from "./dashboardComponents/right_sidebar/RightSidebar";
import OrderTable from "./dashboardComponents/OrderTable";

const Dashboard = () => {
  const [theme, setTheme] = useState("light");
  const [selected, setSelected] = useState("Dashboards");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div
      className="dashboard-container"
      style={{
        gridTemplateColumns:
          selected === "Default" ? "212px 1fr" : "212px 1fr 280px",
      }}
    >
      <Sidebar />
      <div className="main-content">
        <Header toggleTheme={toggleTheme} theme={theme} selected={selected} setSelected={setSelected} />
        {selected === "Dashboards" && <Graphs />}
        {selected === "Default" && <OrderTable />}
      </div>
      {selected !== "Default" && <RightSidebar />}
    </div>
  );
};

export default Dashboard;