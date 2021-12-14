import React, { useState } from "react";
import Box from "@mui/material/Box";
import PageHeader from "components/PageHeader/PageHeader";
import PageTitle from "components/PageTitle/PageTitle";
import PageBody from "components/PageBody/PageBody";

const UserAccount = () => {
  return (
    <Box
      sx={{
        // bgcolor: "primary.main",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <PageHeader />
        <PageTitle />
        <PageBody />
      </Box>
    </Box>
  );
};

export default UserAccount;
