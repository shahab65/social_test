import Box from "@mui/material/Box";
import SelectCategoryHeader from "./SelectCategoryHeader/SelectCategoryHeader";
import SelectCategoryBody from "./SelectCategoryBody/SelectCategoryBody";

type Props = {};

const index = (props: Props) => {
  const {} = props;
  return (
    <Box>
      <SelectCategoryHeader />
      <SelectCategoryBody />
    </Box>
  );
};
export default index;
