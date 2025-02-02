export const formatPublishedDate = (published) => {
  if(!published) return "uknown date";
  return published.split(" +")[0];
}