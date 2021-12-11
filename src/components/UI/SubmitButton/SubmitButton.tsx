import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { ArrowRight } from "../../icons";
import { ReactComponent as InstagramLogo } from "assets/images/instagram.svg";
import Fab from "@mui/material/Fab";
import { Typography } from "@mui/material";
import { ArrowLeft } from "../../icons";

import styled from "@emotion/styled";

type StyleProps = {
  isActive?: boolean;
  // children: React.ReactNode;
};

const CustomButton = styled.div<StyleProps>`
  background-color: ${(props) => (props.isActive ? "#b90093" : "#dfdfdf")};

  padding: 20px 22px;
  border-radius: 36px;
  color: #ffffff;
  cursor: pointer;
`;

type Props = {
  // value: string;
  onClick: () => void;
  isActive?: boolean;
};

const SubmitButton = (props: Props) => {
  const { isActive = true, onClick } = props;
  const onButtonClick = () => {
    if (isActive) {
      onClick();
    }
  };
  return (
    <div style={{ position: "absolute", left: 20, bottom: 24 }}>
      <CustomButton
        style={{ display: "flex", alignItems: "center" }}
        isActive={isActive}
        onClick={onButtonClick}
      >
        <Typography sx={{ fontWeight: "normal", ml: 2 }}>مرحله بعد</Typography>
        <ArrowLeft />
      </CustomButton>
    </div>
  );
};
export default SubmitButton;
