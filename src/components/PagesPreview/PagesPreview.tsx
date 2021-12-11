import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import avatar from "assets/images/avatar.png";
import CustomButton from "components/UI/CustomButton/CustomButton";
import Button from "@mui/material/Button";

type Props = {};

const PagesPreview = (props: Props) => {
  const {} = props;
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 6,
        padding: "26px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {[1, 2, 3].map((i) => (
          <Avatar
            key={i}
            alt={"pages profile"}
            src={avatar}
            style={{ width: 37, height: 37, marginLeft: 8 }}
          />
        ))}
        <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>...</Typography>
      </Box>
      <Button
        variant="outlined"
        onClick={() => {}}
        sx={{
          border: "1px solid #2464d7",
          borderRadius: 8,
          color: "#2464d7",
          fontWeight: "bold",
        }}
      >
        مشاهده صفحات
      </Button>
    </Box>
  );
};
export default PagesPreview;
