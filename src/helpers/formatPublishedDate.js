export const formatPublishedDate = (published) => {
  if(!published) return "uknown date";
  return published.slice(0, 16);
}