import React, { useState } from "react";
import Box from "@mui/material/Box";
import PageHeader from "components/PageHeader/PageHeader";
import PageTitle from "components/PageTitle/PageTitle";
import PageBody from "components/PageBody/PageBody";

const UserAccount = () => {
  return (
    <Box sx={{ background: "#fff", height: "100%" }}>
      <PageHeader />
      <PageTitle />
      <PageBody />
    </Box>
  );
};

export default UserAccount;
