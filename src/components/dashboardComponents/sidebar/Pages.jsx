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
  { icon: <AccountCircleOutlined fontSize="small" />, label: "User Profile", submenu: ["Overview", "Projects", "Campaigns", "Documents", "Followers"] },
  { icon: <DescriptionOutlined fontSize="small" />, label: "Account" },
  { icon: <GroupsOutlined fontSize="small" />, label: "Corporate" },
  { icon: <MenuBookOutlined fontSize="small" />, label: "Blog" },
  { icon: <ChatBubbleOutline fontSize="small" />, label: "Social" },
];

const Pages = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <p style={{ fontSize: "14px", color: "var(--black40)", padding: "4px 12px", lineHeight: "20px", marginBottom: "4px" }}>
        Pages
      </p>
      <ul>
        {pagesItems.map((item, index) => (
          <li key={index} style={{ cursor: "pointer", display: "block", marginBottom:"4px" }}>
            <div
              style={{ display: "flex", alignItems: "center", padding: "4px 8px"}}
              onClick={() => item.submenu && toggleSection(item.label)}
            >
              {item.submenu ? (
                openSection === item.label ? (
                  <KeyboardArrowDown fontSize="small" sx={{ color: "var(--black20)" }} />
                ) : (
                  <KeyboardArrowRight fontSize="small" sx={{ color: "var(--black20)" }} />
                )
              ) : (
                <KeyboardArrowRight fontSize="small" sx={{ color: "var(--black20)" }} />
              )}
              {item.icon}
              <span style={{ marginLeft:"4px", fontSize: "14px" }}>{item.label}</span>
            </div>
            {item.submenu && openSection === item.label && (
              <ul style={{ listStyle: "none", paddingLeft: "46px" }}>
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} style={{ padding: "6px", fontSize: "14px"}}>
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
