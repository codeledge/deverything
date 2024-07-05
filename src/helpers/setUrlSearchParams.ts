import { Maybe } from "../types";

export const setUrlSearchParams = (
  currentURL: string,
  searchParams: Record<string, Maybe<string | number | boolean>> = {}
) => {
  const isRelativeUrl = currentURL.startsWith("/");
  const url = new URL(
    currentURL,
    isRelativeUrl ? "https://deverything.dev/" : undefined // add base to make relative urls work
  );

  Object.entries(searchParams).forEach(([paramKey, paramValue]) => {
    if (paramValue === null || paramValue === undefined) return;
    url.searchParams.set(paramKey, paramValue.toString());
  });

  if (isRelativeUrl) {
    return url.pathname + url.search + url.hash;
  }

  return url.toString();
};
