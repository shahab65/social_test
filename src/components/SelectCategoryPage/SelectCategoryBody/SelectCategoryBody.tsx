import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelectCategorySearchBox from "../SelectCategorySearchBox/SelectCategorySearchBox";
type Props = {};

const SelectCategoryBody = (props: Props) => {
  const {} = props;
  return (
    <Box sx={{ padding: "18px 16px" }}>
      <Typography sx={{ fontWeight: "bold", fontSize: 24, pb: 1 }}>
        انتخاب دسته بندی
      </Typography>
      <Typography sx={{ fontSize: 14, mb: 2 }}>
        لطفا دسته بندی که بهتر شما را توصیف می کند انتخاب نمایید{" "}
      </Typography>
      <SelectCategorySearchBox />
    </Box>
  );
};
export default SelectCategoryBody;
