import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { KeyboardArrowRight } from "@mui/icons-material";

const dashboardItems = [
  { icon: <DashboardOutlinedIcon />, label: "Default", active: true },
  { icon: <ShoppingCartOutlinedIcon />, label: "eCommerce" },
  { icon: <FolderOutlinedIcon />, label: "Projects" },
  { icon: <BookOutlinedIcon />, label: "Online Courses" },
];

const Dashboards = () => {
  return (
    <div style={{ height: "180px" }}>
      <p style={{ fontSize: "14px", color: "var(--black40)", padding: "4px 12px", lineHeight: "20px", marginBottom: "6px" }}>
        Dashboards
      </p>
      <ul style={{ padding: 0, margin: 0 }}>
        {dashboardItems.map((item, index) => (
          <li
            key={index}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              paddingLeft: item.active ? "28px" : null,
              background: item.active ? "var(--dark-opacity)" : null,
              position: "relative",
            }}
          >
            {item.active && (
              <div
                style={{
                  position: "absolute",
                  left: "0px",
                  height: "16px",
                  width: "4px",
                  backgroundColor: "var(--primary-brand",
                  borderRadius: "2px",
                }}
              />
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "4px 0px", paddingRight: "8px" }}>
              {!item.active ? <KeyboardArrowRight sx={{ color: "var(--black20)" }} /> : null}
              {item.icon}
              <span style={{ fontSize: "14px" }}>{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboards;
