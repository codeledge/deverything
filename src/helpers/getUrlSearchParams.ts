import { Maybe } from "../types/Maybe";

export const getUrlSearchParams = (
  urlString: Maybe<string>
): Record<string, string> => {
  if (!urlString) return {};
  try {
    const isRelativeUrl = urlString.startsWith("/");
    const url = new URL(
      urlString,
      isRelativeUrl ? "https://deverything.dev/" : undefined // add base to make relative urls work
    );

    return Object.fromEntries(url.searchParams);
  } catch (_e) {
    return {};
  }
};
