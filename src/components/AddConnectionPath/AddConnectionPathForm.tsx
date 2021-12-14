import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import linkOptions from "constants/linkOptions";
import Axios from "api/Axios";
import { useMutation } from "react-query";
import { SocialLink } from "api/types";

type Props = {
  onToggleForm: () => void;
};

const AddConnectionPathForm = (props: Props) => {
  const { onToggleForm } = props;
  const mutation = useMutation(
    (sc: { social_link: string; social_id: string }) => {
      return Axios.post("/socials", sc);
    }
  );
  return (
    <Box sx={{ p: 2, border: "1px solid black" }}>
      <Typography sx={{ fontSize: 14 }}>افزودن مسیر ارتباطی</Typography>
      <Formik
        initialValues={{ type: "", social_link: "", social_id: "" }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values) => {
          mutation.mutate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          handleReset,
          /* and other goodies */
        }) => {
          const onCancelClick = () => {
            handleReset();
            onToggleForm();
          };
          return (
            <form onSubmit={handleSubmit}>
              <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1}
                mb={2}
              >
                <TextField
                  label="نوع"
                  variant="outlined"
                  select
                  fullWidth
                  value={values.type}
                  name={"type"}
                  onChange={handleChange}
                >
                  {linkOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="لینک"
                  variant="outlined"
                  fullWidth
                  name={"social_link"}
                  value={values.social_link}
                  onChange={handleChange}
                />

                <TextField
                  label="آی دی (ID)"
                  variant="outlined"
                  fullWidth
                  name={"social_id"}
                  value={values.social_id}
                  onChange={handleChange}
                />
              </Stack>
              <Stack direction="row-reverse" spacing={1}>
                <Button
                  // onClick={onToggleForm}
                  variant="contained"
                  type={"submit"}
                >
                  ویرایش مسیر ارتباطی تویتر
                </Button>
                <Button
                  // onClick={onToggleForm}
                  variant="outlined"
                  onClick={onCancelClick}
                >
                  انصراف
                </Button>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};
export default AddConnectionPathForm;
