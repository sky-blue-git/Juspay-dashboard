import { useState } from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaShoppingCart,
  FaFolder,
  FaBookOpen,
  FaFileAlt,
  FaUsers,
  FaBlog,
  FaComment,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
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

      <div className="section-title">Dashboards</div>
      <ul className="menu dashboard-menu">
        <li className="active">
          <div className="active-content">
            <span className="arrow-placeholder"></span>
            <FaTachometerAlt />
            <span>Default</span>
          </div>
        </li>
        <li>
          <FaChevronRight className="arrow" />
          <FaShoppingCart />
          <span>eCommerce</span>
        </li>
        <li>
          <FaChevronRight className="arrow" />
          <FaFolder />
          <span>Projects</span>
        </li>
        <li>
          <FaChevronRight className="arrow" />
          <FaBookOpen />
          <span>Online Courses</span>
        </li>
      </ul>

      <div className="section-title">Pages</div>
      <ul className="menu">
        <li className="has-submenu">
          <div
            className="menu-item-content"
            onClick={() => toggleSection("user")}
          >
            {openSection === "user" ? (
              <FaChevronDown className="arrow" />
            ) : (
              <FaChevronRight className="arrow" />
            )}
            <FaUser />
            <span>User Profile</span>
          </div>
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

        <li className="has-submenu">
          <div className="menu-item-content">
            <FaChevronRight className="arrow" />
            <FaFileAlt />
            <span>Account</span>
          </div>
        </li>
        <li className="has-submenu">
          <div className="menu-item-content">
            <FaChevronRight className="arrow" />
            <FaUsers />
            <span>Corporate</span>
          </div>
        </li>
        <li className="has-submenu">
          <div className="menu-item-content">
            <FaChevronRight className="arrow" />
            <FaBlog />
            <span>Blog</span>
          </div>
        </li>
        <li className="has-submenu">
          <div className="menu-item-content">
            <FaChevronRight className="arrow" />
            <FaComment />
            <span>Social</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
