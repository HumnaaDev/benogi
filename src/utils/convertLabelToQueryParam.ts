export const convertLabelToQueryParam = (label: string) => {
  return label.toLowerCase().replace(/\s+/g, "_");
};
