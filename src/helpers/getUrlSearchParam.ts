import { Maybe } from "../types/Maybe";

export const getUrlSearchParam = (urlString: Maybe<string>, param: string) => {
  if (!urlString) return undefined;
  try {
    const url = new URL(urlString);
    const value = url.searchParams.get(param);
    return value ?? undefined;
  } catch (_e) {
    return undefined;
  }
};
