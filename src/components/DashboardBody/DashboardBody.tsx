import Box from "@mui/material/Box";
import PagesPreview from "components/PagesPreview/PagesPreview";
import ServicesCard from "components/ServicesCard/ServicesCard";
import MyAddsMenu from "components/MyAddsMenu/MyAddsMenu";
import Banner from "components/Banner/Banner";
import CompleteProfileMenu from "components/CompleteProfileMenu/CompleteProfileMenu";

type StyleProps = {};

type Props = {};

const DashboardBody = (props: Props) => {
  const {} = props;
  return (
    <Box sx={{ padding: "16px 22px" }}>
      <CompleteProfileMenu />
      <PagesPreview />
      <ServicesCard />
      <MyAddsMenu />
      <Banner />
    </Box>
  );
};
export default DashboardBody;
