import Box from "@mui/material/Box";
import AddConnectionPathForm from "./AddConnectionPathForm";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

import { Plus } from "components/icons";
import { SocialLink } from "../../api/types";
import { SocialLinks } from "api/types";
type Props = {
  refetchSocialLinks: () => void;
  editItem: SocialLink | null;
  isFormOpen: boolean;
  onToggleForm: () => void;
  setEditItem: (item: SocialLink | null) => void;
  data: SocialLinks | undefined;
};

const AddConnectionPath = (props: Props) => {
  const {
    refetchSocialLinks,
    editItem,
    isFormOpen,
    onToggleForm,
    setEditItem,
    data,
  } = props;

  const actionText = () => {
    if (editItem) return "ویراش مسیر ارتباطی";
    return "افزودن مسیر ارتباطی";
  };
  return (
    <Box sx={{ mb: 2 }}>
      <Button
        sx={{ color: "orange", mb: 2 }}
        onClick={onToggleForm}
        startIcon={<Plus />}
      >
        {actionText()}
      </Button>

      <Collapse in={isFormOpen}>
        <AddConnectionPathForm
          onToggleForm={onToggleForm}
          refetchSocialLinks={refetchSocialLinks}
          editItem={editItem}
          setEditItem={setEditItem}
          data={data}
        />
      </Collapse>
    </Box>
  );
};
export default AddConnectionPath;
