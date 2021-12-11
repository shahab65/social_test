import styled from "@emotion/styled";

type StyleProps = {
  isFocused: boolean;
};

const Wrapper = styled.div<StyleProps>`
  padding: ${(props) => (props.isFocused ? "16px 16px" : "28px 16px")};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.isFocused ? "#2464d7" : "#78919191")};
  border-radius: 20px;
  transition: border-color 0.1s linear;
`;
const Placeholder = styled.div`
  opacity: 45%;
  font-family: "IRANSansFa";
  font-size: 14px;
  margin-right: 16px;
`;

const Title = styled.div`
  font-family: "IRANSansFa";
  font-size: 12px;
  color: #2464d7;
  margin-bottom: 12px;
  font-weight: 600;
`;

const StyledInput = styled.input`
  font-family: "IRANSansFa";
  font-size: 16px;

  color: #393a3a;
  font-weight: 700;
  /* text-align: left; */
  border: none;
  outline: none;
`;

export { Wrapper, Placeholder, Title, StyledInput };
