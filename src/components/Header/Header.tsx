import styled from "@emotion/styled";
import UserInfo from "components/UserInfo/UserInfo";

type StyleProps = {};

const Wrapper = styled.div<StyleProps>`
  background: linear-gradient(to top, #2464d7, #4b8cff);
  padding: 20px 16px 24px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #fff;
`;

type Props = {};

const Header = (props: Props) => {
  const {} = props;
  return (
    <Wrapper>
      <UserInfo />
    </Wrapper>
  );
};
export default Header;
