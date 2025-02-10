import { useState } from "react";
import {
  AccountCircleOutlined,
  DescriptionOutlined,
  GroupsOutlined,
  MenuBookOutlined,
  ChatBubbleOutline,
  KeyboardArrowRight,
  KeyboardArrowDown,
} from "@mui/icons-material";

const pagesItems = [
  { icon: <AccountCircleOutlined />, label: "User Profile", submenu: ["Overview", "Projects", "Campaigns", "Documents", "Followers"] },
  { icon: <DescriptionOutlined />, label: "Account" },
  { icon: <GroupsOutlined />, label: "Corporate" },
  { icon: <MenuBookOutlined />, label: "Blog" },
  { icon: <ChatBubbleOutline />, label: "Social" },
];

const Pages = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <p style={{ fontSize: "14px", color: "var(--black40)", padding: "4px 12px", lineHeight: "20px", marginBottom: "6px" }}>
        Pages
      </p>
      <ul>
        {pagesItems.map((item, index) => (
          <li key={index} style={{ cursor: "pointer", display: "block" }}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "4px", padding: "4px 0px", paddingRight: "8px" }}
              onClick={() => item.submenu && toggleSection(item.label)}
            >
              {item.submenu ? (
                openSection === item.label ? (
                  <KeyboardArrowDown sx={{ color: "var(--black20)" }} />
                ) : (
                  <KeyboardArrowRight sx={{ color: "var(--black20)" }} />
                )
              ) : (
                <KeyboardArrowRight sx={{ color: "var(--black20)" }} />
              )}
              {item.icon}
              <span style={{ fontSize: "14px" }}>{item.label}</span>
            </div>
            {item.submenu && openSection === item.label && (
              <ul style={{ listStyle: "none", paddingLeft: "48px" }}>
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} style={{ fontSize: "14px", padding: "6px 8px" }}>
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pages;
