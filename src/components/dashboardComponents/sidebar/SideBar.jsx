import { useState } from "react";
import { FaUser, FaShoppingCart, FaFolder, FaBookOpen, FaFileAlt, FaUsers, FaBlog, FaComment } from "react-icons/fa";
import "./SideBar.css"; 
import Profile from "../../../assets/profile.svg";
import Favourites from "./Favourites";

const SideBar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar">
      <div className="user">
        <img src={Profile} alt="Profile" className="profile-pic" />
        <span className="username">ByeWind</span>
      </div>

      <Favourites />

      {/* Dashboards */}
      <div className="section-title">Dashboards</div>
      <ul className="menu">
        <li className="active">Default</li>
        <li><FaShoppingCart /> eCommerce</li>
        <li><FaFolder /> Projects</li>
        <li><FaBookOpen /> Online Courses</li>
      </ul>

      {/* Pages */}
      <div className="section-title">Pages</div>
      <ul className="menu">
        <li onClick={() => toggleSection("user")}>
          <FaUser /> User Profile
          {openSection === "user" && (
            <ul className="submenu">
              <li>Overview</li>
              <li>Projects</li>
              <li>Campaigns</li>
              <li>Documents</li>
              <li>Followers</li>
            </ul>
          )}
        </li>
        <li><FaFileAlt /> Account</li>
        <li><FaUsers /> Corporate</li>
        <li><FaBlog /> Blog</li>
        <li><FaComment /> Social</li>
      </ul>
    </div>
  );
};

export default SideBar;
