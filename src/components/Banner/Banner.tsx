import Box from "@mui/material/Box";
import bannerIcon from "./banner.png";
import Typography from "@mui/material/Typography";

type Props = {};

const Banner = (props: Props) => {
  const {} = props;
  return (
    <Box
      sx={{
        display: "flex",
        background: "linear-gradient(to right, #49589c, #b64473,#ce7150)",
        padding: "15px 45px 20px 10px",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 6,
      }}
    >
      <Typography sx={{ fontWeight: "bold", color: "#ffffff" }}>بنر</Typography>
      <Typography
        sx={{ fontWeight: "bold", color: "#ffffff", alignSelf: "end" }}
      >
        ...
      </Typography>
      <img src={bannerIcon} alt={"icon"} />
    </Box>
  );
};
export default Banner;
