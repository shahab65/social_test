import Page from "../components/UI/Page/Page";
import avatar from "assets/images/avatar.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramPageInfo from "components/InstagramPageInfo/InstagramPageInfo";
import CustomButton from "components/UI/CustomButton/CustomButton";
import CustomAvatar from "components/UI/CustomAvatar/CustomAvatar";
import Header from "components/Header/Header";
import DashboardBody from "components/DashboardBody/DashboardBody";

const ConfirmInstagramPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <Box
        sx={{
          maxWidth: 600,
          width: 600,
          background: "#f4f8ff",
        }}
      >
        <Header />
        <DashboardBody />
      </Box>
    </Box>
  );
};

export default ConfirmInstagramPage;
