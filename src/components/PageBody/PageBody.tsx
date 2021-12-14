import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddConnectionPath from "components/AddConnectionPath/AddConnectionPath";
import SocialLinkList from "components/SocialLinkList/SocialLinkList";
import { useSocialLinks } from "api/calls";
import { SocialLink } from "../../api/types";
import useToggle from "hooks/useToggle";
type Props = {};

const PageBody = (props: Props) => {
  const {} = props;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const onToggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };
  const [editItem, setEditItem] = useState<SocialLink | null>(null);

  const { data, isLoading, isError, error, isSuccess, refetch } =
    useSocialLinks();
  console.log(`data`, data);

  const refetchSocialLinks = () => {
    refetch();
  };
  const onEdit = (link: SocialLink | null) => {
    setIsFormOpen(true);
    setEditItem(link);
  };
  return (
    <Box sx={{ p: 2 }}>
      {isLoading && <div>Loading social links...</div>}
      <Typography sx={{ fontSize: 12, color: "grey", mb: 2 }}>
        مسیر های ارتباطی
      </Typography>
      <AddConnectionPath
        refetchSocialLinks={refetchSocialLinks}
        editItem={editItem}
        isFormOpen={isFormOpen}
        onToggleForm={onToggleForm}
      />
      <SocialLinkList
        data={data || []}
        refetchSocialLinks={refetchSocialLinks}
        setEditItem={onEdit}
      />
    </Box>
  );
};
export default PageBody;
