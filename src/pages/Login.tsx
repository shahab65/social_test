import React from "react";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
import Page from "../components/UI/Page/Page";

const Login = () => {
  return (
    <Page>
      <Typography sx={{ fontWeight: "bold" }}>Bold</Typography>
      <Typography sx={{ fontWeight: 500 }}>Medium</Typography>
      <Typography sx={{ fontWeight: 300 }}>Light</Typography>
      <Typography sx={{ fontWeight: 200 }}>Ultra Light</Typography>
      <Typography sx={{ fontWeight: "normal" }}>Regular</Typography>
    </Page>
  );
};

export default Login;
