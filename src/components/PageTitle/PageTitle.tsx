import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breads from "components/Breads/Breads";
type Props = {};

const PageTitle = (props: Props) => {
  const {} = props;
  return (
    <Box sx={{ mb: 2, p: 2 }}>
      <Typography sx={{ fontWeight: "bold" }}>حساب کاربری</Typography>
      <Breads />
    </Box>
  );
};
export default PageTitle;
