import React from "react";
import { IconButton } from "@mui/material";
import { Add, FilterList, SwapVert } from "@mui/icons-material";
import CustomSearch from "./CustomSearch";

const SearchComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        backgroundColor: "var(--primary-light)",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <div>
        <IconButton>
          <Add style={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <FilterList style={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <SwapVert style={{ color: "black" }} />
        </IconButton>
      </div>
      <div style={{borderRadius: "8px", border: "1px solid var(--black10)"}}>
      <CustomSearch backgroundColor="var(--white40)" showSearch2={false} />
      </div>
    </div>
  );
};

export default SearchComponent;
