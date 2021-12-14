import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Plus } from "components/icons";
import Link from "@mui/material/Link";
import { SocialLink } from "api/types";
import { getSocialLinkName } from "../../utils";

type Props = {
  link: SocialLink;
  onDeleteLink: (id: string) => void;
  setEditItem: (item: SocialLink) => void;
};

const SocialLinkItem = (props: Props) => {
  const { link, onDeleteLink, setEditItem } = props;
  return (
    <Box
      sx={{
        border: "1px solid green",
        p: 2,
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Box>twiter</Box>
        <Typography>{getSocialLinkName(link.type)}</Typography>
        <Typography>آیدی (ID)</Typography>
        <Typography>{link.social_id}</Typography>
        <Typography>لینک:</Typography>
        <Link href={link.social_link} underline="none">
          {link.social_link}
        </Link>
      </Stack>
      <Box>
        <Button
          sx={{ color: "orange", mb: 2 }}
          onClick={() => setEditItem(link)}
          startIcon={<Plus />}
        >
          ویرایش
        </Button>
        <Button
          sx={{ color: "orange", mb: 2 }}
          onClick={() => onDeleteLink(link.id)}
          startIcon={<Plus />}
        >
          حذف
        </Button>
      </Box>
    </Box>
  );
};
export default SocialLinkItem;
