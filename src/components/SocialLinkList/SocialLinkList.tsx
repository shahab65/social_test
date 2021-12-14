import SocialLinkItem from "./SocialLinkItem";
import { SocialLinks } from "api/types";

type Props = {
  data: SocialLinks | undefined;
};

const SocialLinkList = (props: Props) => {
  const { data } = props;

  return (
    <div>
      {data?.map((socialLink) => {
        return <SocialLinkItem link={socialLink} key={socialLink.id} />;
      })}
    </div>
  );
};
export default SocialLinkList;
