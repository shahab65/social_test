import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddConnectionPath from "components/AddConnectionPath/AddConnectionPath";
import SocialLinkList from "components/SocialLinkList/SocialLinkList";
import { useSocialLinks } from "api/calls";
type Props = {};

const PageBody = (props: Props) => {
  const {} = props;
  const { data, isLoading, isError, error, isSuccess, refetch } =
    useSocialLinks();
  console.log(`data`, data);

  const refetchSocialLinks = () => {
    refetch();
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ fontSize: 12, color: "grey", mb: 2 }}>
        مسیر های ارتباطی
      </Typography>
      <AddConnectionPath refetchSocialLinks={refetchSocialLinks} />
      <SocialLinkList data={data || []} />
    </Box>
  );
};
export default PageBody;
