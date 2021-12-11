import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Page from "../components/UI/Page/Page";
import Input from "../components/UI/Input/Input";
import SubmitButton from "../components/UI/SubmitButton/SubmitButton";
const Login = () => {
  const [value, setValue] = useState("");
  return (
    <Page>
      <Typography sx={{ fontWeight: "bold", fontSize: 24, mb: 2 }}>
        صفحه اینستاگرام
      </Typography>
      <Typography sx={{ mb: 2 }}>
        لطفا نام صفحه اینستاگرام خود را وارد نمایید
      </Typography>
      <Input value={value} setValue={setValue} />
      <SubmitButton
        onClick={() => {
          alert("hi");
        }}
      />
    </Page>
  );
};

export default Login;
