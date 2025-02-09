import Profile from "../../../assets/profile.svg";
import Favourites from "./Favourites";
import Dashboards from "./Dashboards";
import Pages from "./Pages";

const SideBar = () => {
  return (
    <div style={{ width: "212px", padding: "20px 16px", borderRight: "1px solid var(--black10)", overflowY: "auto"}}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img src={Profile} alt="Profile" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
        <span style={{ fontWeight: "bold", color: "var(--sidebar-text)" }}>ByeWind</span>
      </div>
      <div style={{marginBottom: "16px"}}>
        <Favourites />
      </div>
      <div style={{marginBottom: "16px"}}>
      <Dashboards />
      </div>
      <Pages />
    </div>
  );
};

export default SideBar;
