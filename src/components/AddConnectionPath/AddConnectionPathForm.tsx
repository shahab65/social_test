import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Plus } from "components/icons";

type Props = {};
const currencies = [
  {
    value: "USD",
    label: "اینستاگرام",
  },
  {
    value: "EUR",
    label: "فیسبوک",
  },
  {
    value: "BTC",
    label: "تلگرام",
  },
  {
    value: "JPY",
    label: "تویتر",
  },
  {
    value: "JPY",
    label: "لینکداین",
  },
  {
    value: "JPY",
    label: "وب‌سایت",
  },
];
const AddConnectionPathForm = (props: Props) => {
  const {} = props;
  return (
    <Box sx={{ p: 2, border: "1px solid black" }}>
      <Typography sx={{ fontSize: 14 }}>افزودن مسیر ارتباطی</Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={1}
        mb={2}
      >
        <TextField
          id="outlined-basic"
          label="نوع"
          variant="outlined"
          select
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-basic"
          label="لینک"
          variant="outlined"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          label="آی دی (ID)"
          variant="outlined"
          fullWidth
        />
      </Stack>
      <Stack direction="row-reverse" spacing={1}>
        <Button
          // onClick={onToggleForm}
          variant="contained"
        >
          ویرایش مسیر ارتباطی تویتر
        </Button>
        <Button
          // onClick={onToggleForm}
          variant="outlined"
        >
          انصراف
        </Button>
      </Stack>
    </Box>
  );
};
export default AddConnectionPathForm;
