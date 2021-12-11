import Box from "@mui/material/Box";
import SelectCategoryPage from "components/SelectCategoryPage";
const SelectCategory = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <Box
        sx={{
          maxWidth: 600,
          width: 600,
          background: "#f4f8ff",
        }}
      >
        <SelectCategoryPage />
      </Box>
    </Box>
  );
};

export default SelectCategory;
