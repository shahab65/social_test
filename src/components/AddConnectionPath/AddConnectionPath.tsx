import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddConnectionPathForm from "./AddConnectionPathForm";
import Collapse from "@mui/material/Collapse";
import useToggle from "hooks/useToggle";

import { Plus } from "components/icons";
type Props = {};

const AddConnectionPath = (props: Props) => {
  const {} = props;
  const [isFormOpen, setIsFormOpen] = useToggle();
  const onToggleForm = () => {
    setIsFormOpen();
  };
  return (
    <Box>
      <Typography sx={{}} onClick={onToggleForm}>
        <Plus />
        افزودن مسیر ارتباطی
      </Typography>

      <Collapse in={isFormOpen}>
        <Box sx={{ p: 2, background: "red" }}>
          <AddConnectionPathForm />
        </Box>
      </Collapse>
    </Box>
  );
};
export default AddConnectionPath;
