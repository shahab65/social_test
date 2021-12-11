import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "components/Header/Header";

const UserAccount = () => {
  const [value, setValue] = useState("");
  return (
    <Box sx={{ background: "black", height: "100%" }}>
      <Header />
    </Box>
  );
};

export default UserAccount;
