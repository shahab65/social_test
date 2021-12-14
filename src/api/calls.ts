import Axios from "./Axios";
import { useQuery } from "react-query";
import { SocialLinks } from "./types";

export function useSocialLinks() {
  return useQuery<SocialLinks, string>(
    "socialLinks",
    () => Axios.get("/socials").then((res) => res.data),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: Infinity,
      // onSuccess: (res) => {
      //   store.dispatch(actions.setMyBills(res));
      // },
    }
  );
}
