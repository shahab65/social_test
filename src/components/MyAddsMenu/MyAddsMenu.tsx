import Box from "@mui/material/Box";
import addsIcon from "./adds.png";
import Typography from "@mui/material/Typography";
import { ArrowLeft } from "components/icons";

type Props = {};

const MyAddsMenu = (props: Props) => {
  const {} = props;
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 4,
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={addsIcon} alt={"icon"} width={43} height={43} />
        <Typography sx={{ fontWeight: "bold", mr: 1 }}>تبلیغ های من</Typography>
      </Box>
      <ArrowLeft />
    </Box>
  );
};
export default MyAddsMenu;
