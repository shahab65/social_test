import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import avatar from "assets/images/avatar.png";
// import { ReactComponent as IranFlag } from "assets/images/iran.svg";
import iranFlag from "assets/images/iran.svg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type StyleProps = {};

const UserView = styled.div<StyleProps>`
  display: flex;
  align-items: center;
`;

type Props = {};

const UserAccountInfo = (props: Props) => {
  const {} = props;
  return (
    <UserView>
      <img src={iranFlag} alt={"flag"} width={30} height={30} />

      <Avatar
        alt={"user profile"}
        src={avatar}
        sx={{ width: 37, height: 37, ml: 2 }}
      />
    </UserView>
  );
};
export default UserAccountInfo;
