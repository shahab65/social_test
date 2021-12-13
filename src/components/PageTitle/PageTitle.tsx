import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {};

const PageTitle = (props: Props) => {
  const {} = props;
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>حساب کاربری</Typography>
    </Box>
  );
};
export default PageTitle;
