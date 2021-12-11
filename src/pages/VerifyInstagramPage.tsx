import Page from "../components/UI/Page/Page";
import avatar from "assets/images/avatar.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramPageInfo from "components/InstagramPageInfo/InstagramPageInfo";
import CustomButton from "components/UI/CustomButton/CustomButton";
import CustomAvatar from "components/UI/CustomAvatar/CustomAvatar";

const ConfirmInstagramPage = () => {
  return (
    <Page>
      <Box sx={{ textAlign: "center", padding: "0 50px" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <CustomAvatar src={avatar} width={118} height={118} />
        </Box>
        <Typography sx={{ fontWeight: "bold", fontSize: 18, mb: 2 }}>
          ali2312
        </Typography>
        <Typography sx={{ fontSize: 16, color: "#a6a6a6", mb: 2 }}>
          Morteza hashemian
        </Typography>
        <InstagramPageInfo />

        <CustomButton
          onClick={() => {
            alert("hi");
          }}
        >
          ارسال کد تایید به دایرکت اینستاگرام
        </CustomButton>
      </Box>
    </Page>
  );
};

export default ConfirmInstagramPage;
