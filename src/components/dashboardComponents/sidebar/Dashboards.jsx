import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { KeyboardArrowRight } from "@mui/icons-material";

const dashboardItems = [
  { icon: <DashboardOutlinedIcon fontSize="xsmall"/>, label: "Default", active: true },
  { icon: <ShoppingCartOutlinedIcon fontSize="xsmall" />, label: "eCommerce" },
  { icon: <FolderOutlinedIcon fontSize="xsmall" />, label: "Projects" },
  { icon: <BookOutlinedIcon fontSize="xsmall" />, label: "Online Courses" },
];

const Dashboards = () => {
  return (
    <div style={{ height: "168px", width: "180px" }}>
      <p style={{ fontSize: "14px", color: "var(--black40)", padding: "4px 12px", lineHeight: "20px", marginBottom: "4px" }}>
        Dashboards
      </p>
      <ul>
        {dashboardItems.map((item, index) => (
          <li
            key={index}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              paddingLeft: item.active ? "20px" : null,
              background: item.active ? "var(--dark-opacity)" : null,
              position: "relative",
              marginBottom: "4px",
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

            <div style={{ display: "flex", alignItems: "center", padding: "4px 8px" }}>
              {!item.active ? <KeyboardArrowRight fontSize="small" sx={{ color: "var(--black20)" }} /> : null}
              {item.icon}
              <span style={{ marginLeft:"4px", fontSize: "14px", lineHeight: "20px"}}>{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboards;
