import Box from "@mui/material/Box";
import UserAccountInfo from "components/UserAccountInfo/UserAccountInfo";
import Button from "@mui/material/Button";
import { ReactComponent as GridIcon } from "./grid.svg";
import Typography from "@mui/material/Typography";

type Props = {};

const SelectCategoryHeader = (props: Props) => {
  const {} = props;
  return (
    <Box
      sx={{
        background: "#fff",
        p: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <UserAccountInfo />
      <Button
        variant="contained"
        onClick={() => {}}
        sx={{
          borderRadius: 8,
        }}
      >
        <GridIcon />

        <Typography sx={{ fontSize: 12, mr: 1 }}>برو به پیشخوان</Typography>
      </Button>
    </Box>
  );
};
export default SelectCategoryHeader;
