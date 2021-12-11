import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import avatar from "assets/images/avatar.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type StyleProps = {};

const UserView = styled.div<StyleProps>`
  display: flex;
  /* direction: ltr; */
`;

type Props = {};

const UserAccountInfo = (props: Props) => {
  const {} = props;
  return (
    <UserView>
      <Box sx={{ padding: "0 8px" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
          ali2132
        </Typography>

        <Typography sx={{ fontSize: 12 }}>Morteza hashemian</Typography>
      </Box>
      <Avatar
        alt={"user profile"}
        src={avatar}
        style={{ width: 37, height: 37 }}
      />
    </UserView>
  );
};
export default UserAccountInfo;
