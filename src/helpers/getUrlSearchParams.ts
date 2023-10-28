import { Maybe } from "../types/Maybe";

export const getUrlSearchParams = (
  urlString: Maybe<string>
): Record<string, string> => {
  if (!urlString) return {};
  try {
    const url = new URL(urlString);
    return Object.fromEntries(url.searchParams);
  } catch (_e) {
    return {};
  }
};
