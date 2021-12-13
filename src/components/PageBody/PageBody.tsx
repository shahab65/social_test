import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddConnectionPath from "components/AddConnectionPath/AddConnectionPath";
type Props = {};

const PageBody = (props: Props) => {
  const {} = props;
  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ fontSize: 12, color: "grey", mb: 2 }}>
        مسیر های ارتباطی
      </Typography>
      <AddConnectionPath />
    </Box>
  );
};
export default PageBody;
