import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "components/Header/Header";
import PageTitle from "components/PageTitle/PageTitle";

const UserAccount = () => {
  const [value, setValue] = useState("");
  return (
    <Box sx={{ background: "#fff", height: "100%" }}>
      <Header />
      <PageTitle />
    </Box>
  );
};

export default UserAccount;
