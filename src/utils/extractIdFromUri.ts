export const extractIdFromUri = (uri: string) => {
  return uri.split("#").pop() || "";
};
