import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import search2 from "../../assets/search2.svg";

const CustomSearch = ({ backgroundColor, showSearch2 }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: backgroundColor || "var(--dark-opacity)",
        borderRadius: "8px",
        padding: "4px 8px",
        width: "160px",
        height: "28px"
      }}
    >
      <SearchOutlined style={{ color: "var(--black20)", fontSize: "16px" }} />
      <input
        type="text"
        placeholder="Search"
        style={{
          border: "none",
          outline: "none",
          fontSize: "14px",
          background: "none",
          color: "var(--black20)",
          marginLeft: "4px",
          width: "100%",
        }}
      />
      {showSearch2 && (
        <img
          src={search2}
          alt="Search"
          style={{
            width: "18px",
            height: "18px",
            marginLeft: "auto",
          }}
        />
      )}
    </div>
  );
};

export default CustomSearch;