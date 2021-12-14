import { useEffect } from "react";
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
import { useFormik } from "formik";
import { SocialLink } from "../../api/types";
import { getSocialLinkName } from "utils";

type Props = {
  onToggleForm: () => void;
  refetchSocialLinks: () => void;
  editItem: SocialLink | null;
  setEditItem: (item: SocialLink | null) => void;
};

const AddConnectionPathForm = (props: Props) => {
  const { onToggleForm, refetchSocialLinks, editItem, setEditItem } = props;
  console.log(`editItem`, editItem);
  const formik = useFormik({
    initialValues: {
      type: "",
      social_link: "",
      social_id: "",
    },
    validate: (values) => {
      const errors: {
        type?: string;
        social_link?: string;
        social_id?: string;
      } = {};
      if (!values.type) errors.type = "مورد نیاز";
      if (!values.social_link) errors.social_link = "مورد نیاز";
      if (!values.social_id) errors.social_id = "مورد نیاز";
      return errors;
    },
    onSubmit: (values) => {
      if (editItem) edition.mutate(values);
      else mutation.mutate(values);
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    resetForm,
    setValues,
    /* and other goodies */
  } = formik;
  const onClose = () => {
    resetForm();
    onToggleForm();
    setEditItem(null);
  };
  useEffect(() => {
    if (editItem) {
      setValues(editItem);
    }
  }, [editItem]);
  const mutation = useMutation(
    (sc: { social_link: string; social_id: string }) => {
      return Axios.post("/socials", sc);
    },
    {
      onSuccess: () => {
        refetchSocialLinks();
        onClose();
      },
    }
  );

  const edition = useMutation(
    (sc: { social_link: string; social_id: string }) => {
      return Axios.patch(`/socials/${editItem?.id}`, sc);
    },
    {
      onSuccess: () => {
        refetchSocialLinks();
        onClose();
      },
    }
  );
  const buttonText = () => {
    if (editItem)
      return `ویرایش مسیر ارتباطی ${getSocialLinkName(editItem.type)}`;
    return "ثبت مسیر ارتباطی";
  };
  return (
    <Box sx={{ p: 2, border: "1px solid black" }}>
      <Typography sx={{ fontSize: 14 }}>افزودن مسیر ارتباطی</Typography>
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
            helperText={errors.type}
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
            helperText={errors.social_link}
          />

          <TextField
            label="آی دی (ID)"
            variant="outlined"
            fullWidth
            name={"social_id"}
            value={values.social_id}
            onChange={handleChange}
            helperText={errors.social_id}
          />
        </Stack>
        <Stack direction="row-reverse" spacing={1}>
          <Button
            // onClick={onToggleForm}
            variant="contained"
            type={"submit"}
          >
            {buttonText()}
          </Button>
          <Button
            // onClick={onToggleForm}
            variant="outlined"
            onClick={onClose}
          >
            انصراف
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
export default AddConnectionPathForm;
