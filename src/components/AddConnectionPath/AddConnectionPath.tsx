import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddConnectionPathForm from "./AddConnectionPathForm";
import Collapse from "@mui/material/Collapse";
import useToggle from "hooks/useToggle";
import Button from "@mui/material/Button";

import { Plus } from "components/icons";
type Props = {};

const AddConnectionPath = (props: Props) => {
  const {} = props;
  const [isFormOpen, setIsFormOpen] = useToggle();
  const onToggleForm = () => {
    setIsFormOpen();
  };
  return (
    <Box sx={{ mb: 2 }}>
      <Button
        sx={{ color: "orange", mb: 2 }}
        onClick={onToggleForm}
        startIcon={<Plus />}
      >
        افزودن مسیر ارتباطی
      </Button>

      <Collapse in={isFormOpen}>
        <AddConnectionPathForm onToggleForm={onToggleForm} />
      </Collapse>
    </Box>
  );
};
export default AddConnectionPath;
