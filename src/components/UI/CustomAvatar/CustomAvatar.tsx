import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { ArrowRight } from "../../icons";
import { ReactComponent as InstagramLogo } from "assets/images/instagram.svg";
import Fab from "@mui/material/Fab";
import { Typography } from "@mui/material";
import { ArrowLeft } from "../../icons";

import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import avatar from "assets/images/avatar.png";

type StyleProps = {
  width: number;
  height: number;
  borderWidth: number;
};

const Wrapper = styled.div<StyleProps>`
  background: linear-gradient(#b10597, #2a61d5);
  width: ${({ width, borderWidth }) => width + borderWidth + "px"};
  height: ${({ height, borderWidth }) => height + borderWidth + "px"};

  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubWrapper = styled.div<StyleProps>`
  background: black;
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  border-radius: 1000px;
`;
type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  borderWidth?: number;
};

const CustomAvatar = (props: Props) => {
  const {
    src,
    width = 300,
    height = 300,
    alt = "avatar",
    borderWidth = 10,
  } = props;
  return (
    <Wrapper width={width} height={height} borderWidth={borderWidth}>
      <SubWrapper width={width} height={height} borderWidth={borderWidth}>
        <Avatar alt={alt} src={src} style={{ width: width, height: height }} />
      </SubWrapper>
    </Wrapper>
  );
};
export default CustomAvatar;
