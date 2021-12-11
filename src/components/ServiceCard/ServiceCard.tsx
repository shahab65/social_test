import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  img: string;
  title: string;
};

const ServiceCard = (props: Props) => {
  const { img, title } = props;
  return (
    <Box
      sx={{
        background: "#fff",
        textAlign: "center",
        borderRadius: 6,
        padding: "11px 10px 5px",
        mb: 2,
      }}
    >
      <Box
        sx={{
          background: "#ecf3ff",
          padding: "23px 25px 13px",
          mb: 1,
          borderRadius: 6,
          position: "relative",
        }}
      >
        <img src={img} alt={title} width={113} height={90} />
        <Box
          sx={{
            background: "#b90093",
            borderRadius: 20,
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: -5,
            top: -5,
          }}
        >
          <Typography
            sx={{ fontSize: 14, color: "#ffffff", fontFamily: "IRANSansFa" }}
          >
            3
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
    </Box>
  );
};
export default ServiceCard;
