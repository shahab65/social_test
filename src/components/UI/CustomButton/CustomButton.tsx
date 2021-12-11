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
  background-image: linear-gradient(to right, #8a046e, #b90093);

  padding: 20px 22px;
  border-radius: 36px;
  color: #ffffff;
  cursor: pointer;
`;

type Props = {
  // value: string;
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
};

const SubmitButton = (props: Props) => {
  const { isActive = true, onClick, children } = props;
  const onButtonClick = () => {
    if (isActive) {
      onClick();
    }
  };
  return (
    <CustomButton
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      isActive={isActive}
      onClick={onButtonClick}
    >
      {children}
    </CustomButton>
  );
};
export default SubmitButton;
