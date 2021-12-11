import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { ArrowRight } from "../../icons";
import { ReactComponent as InstagramLogo } from "assets/images/instagram.svg";
import useOnClickOutside from "utils/hooks/useOnClickOutside";
import { Wrapper, Placeholder, Title, StyledInput } from "./styles";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

const Input = (props: Props) => {
  const { value, setValue } = props;
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  useOnClickOutside(ref, () => setIsFocused(false));

  const onClearInput = () => {
    setValue("");
  };
  useEffect(() => {
    if (isFocused) {
      inputRef?.current?.focus();
    }
  }, [isFocused, value]);

  const onClickOnInput = () => {
    setIsFocused(true);
    inputRef?.current?.focus();
  };

  return (
    <Wrapper onClick={onClickOnInput} isFocused={isFocused} ref={ref}>
      {isFocused || !!value ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <InstagramLogo />
            </div>
            <div style={{ marginRight: 16 }}>
              <Title>نام صفحه اینستاگرام</Title>
              <StyledInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ref={inputRef}
              />
            </div>
          </div>
          <div>
            <InstagramLogo onClick={onClearInput} />
          </div>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div>
            <InstagramLogo />
          </div>
          <Placeholder>نام صفحه اینستاگرام </Placeholder>
        </div>
      )}
    </Wrapper>
  );
};
export default Input;
