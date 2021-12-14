import SocialLinkItem from "./SocialLinkItem";
import { SocialLinks, SocialLink } from "api/types";
import Axios from "api/Axios";
import { useMutation } from "react-query";

type Props = {
  data: SocialLinks | undefined;
  refetchSocialLinks: () => void;
  setEditItem: (item: SocialLink) => void;
};

const SocialLinkList = (props: Props) => {
  const { data, refetchSocialLinks, setEditItem } = props;
  const mutation = useMutation(
    (id: string) => {
      return Axios.delete(`/socials/${id}`);
    },
    {
      onSuccess: () => {
        refetchSocialLinks();
      },
    }
  );

  const onDeleteLink = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <div>
      {data?.map((socialLink) => {
        return (
          <SocialLinkItem
            link={socialLink}
            key={socialLink.id}
            onDeleteLink={onDeleteLink}
            setEditItem={setEditItem}
          />
        );
      })}
    </div>
  );
};
export default SocialLinkList;
