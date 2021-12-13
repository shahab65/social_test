import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

type Props = {};

const AddConnectionPathForm = (props: Props) => {
  const {} = props;
  return (
    <Box sx={{ p: 2, background: "green" }}>
      <Typography sx={{ fontSize: 14 }}>افزودن مسیر ارتباطی</Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={1}
      >
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Stack>
    </Box>
  );
};
export default AddConnectionPathForm;
