import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const Breads = () => {
  return (
    <Breadcrumbs separator=".">
      <Typography sx={{ fontSize: 11, color: "black" }}>خانه</Typography>
      <Typography sx={{ fontSize: 11, color: "black" }}>کاربر</Typography>
      <Typography sx={{ fontSize: 11, color: "grey" }}>
        تنظیمات کاربری
      </Typography>
    </Breadcrumbs>
  );
};

export default Breads;
