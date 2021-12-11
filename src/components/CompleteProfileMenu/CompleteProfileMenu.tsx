import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Props = {};

const CompleteProfileMenu = (props: Props) => {
  const {} = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        background: "#c5fcee",
        padding: "15px 30px",
        mb: 2,
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
        برای استفاده از تمام امکانات اپلیکیشن اطلاعات را تکمیل نمایید
      </Typography>
      <Button
        variant="outlined"
        onClick={() => {}}
        sx={{
          border: "1px solid #393a3a",
          borderRadius: 8,
          color: "#393a3a",
          mr: 2,
        }}
      >
        مشاهده صفحات
      </Button>
    </Box>
  );
};
export default CompleteProfileMenu;
