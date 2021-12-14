import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddConnectionPathForm from "./AddConnectionPathForm";
import Collapse from "@mui/material/Collapse";
import useToggle from "hooks/useToggle";
import Button from "@mui/material/Button";

import { Plus } from "components/icons";
import { SocialLink } from "../../api/types";
type Props = {
  refetchSocialLinks: () => void;
  editItem: SocialLink | null;
  isFormOpen: boolean;
  onToggleForm: () => void;
};

const AddConnectionPath = (props: Props) => {
  const { refetchSocialLinks, editItem, isFormOpen, onToggleForm } = props;

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
        />
      </Collapse>
    </Box>
  );
};
export default AddConnectionPath;
