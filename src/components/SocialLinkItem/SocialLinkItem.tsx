import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Plus } from "components/icons";

type Props = {};

const SocialLinkItem = (props: Props) => {
  const {} = props;
  return (
    <Box
      sx={{
        border: "1px solid green",
        p: 2,
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Box>twiter</Box>
        <Typography>تویتر</Typography>
        <Typography>آیدی (ID)</Typography>
        <Typography>@mhossiamher</Typography>
        <Typography>لینک:</Typography>
        <Typography>https://twitter.com/mhossinher</Typography>
      </Stack>
      <Box>
        <Button
          sx={{ color: "orange", mb: 2 }}
          //   onClick={onToggleForm}
          startIcon={<Plus />}
        >
          ویرایش
        </Button>
        <Button
          sx={{ color: "orange", mb: 2 }}
          //   onClick={onToggleForm}
          startIcon={<Plus />}
        >
          حذف
        </Button>
      </Box>
    </Box>
  );
};
export default SocialLinkItem;
