import linkOptions from "constants/linkOptions";
export const getSocialLinkName = (type: string): string => {
  const link = linkOptions.find((item) => item.value === type);
  if (link) return link.label;
  return "";
};
