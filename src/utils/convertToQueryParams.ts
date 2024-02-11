import { convertLabelToQueryParam } from ".";

export const convertToQueryParams = (
  key: string,
  value: string | number,
  params: URLSearchParams,
) => {
  const searchParams = new URLSearchParams(Array.from(params.entries()));
  const label = convertLabelToQueryParam(key);
  searchParams.set(label, value as string);
  const search = searchParams.toString();
  const query = search ? `?${search}` : "";
  return query;
};
