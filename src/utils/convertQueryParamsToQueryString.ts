import { IParams } from "@/typings";
import { convertToQueryParams } from ".";

export const convertQueryParamsToQueryString = (
  params: IParams,
  searchParams: URLSearchParams,
) => {
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      const queryParam = convertToQueryParams(key, value, searchParams);
      const index = queryParam.indexOf("&");
      if (index !== -1) {
        return queryParam.substring(index + 1);
      }
    }
  }
};
