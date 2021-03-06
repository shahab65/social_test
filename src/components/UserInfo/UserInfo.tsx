import styled from "@emotion/styled";
import { ReactComponent as Search } from "assets/images/search.svg";
import Avatar from "@mui/material/Avatar";
import avatar from "assets/images/avatar.png";
import Typography from "@mui/material/Typography";
import UserAccountInfo from "components/UserAccountInfo/UserAccountInfo";
import Box from "@mui/material/Box";

type StyleProps = {};

const Wrapper = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

type Props = {};

const UserInfo = (props: Props) => {
  const {} = props;
  return (
    <Wrapper>
      <Search />
      <Box>
        <UserAccountInfo />
      </Box>
    </Wrapper>
  );
};
export default UserInfo;
