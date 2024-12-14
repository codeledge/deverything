import { Maybe, PlainObject } from "../types";
import { isObject } from "../validators";

export const setUrlSearchParams = (
  currentURL: string,
  searchParams: Record<
    string,
    Maybe<string | number | boolean | PlainObject>
  > = {}
) => {
  const isRelativeUrl = currentURL.startsWith("/");
  const url = new URL(
    currentURL,
    isRelativeUrl ? "https://deverything.dev/" : undefined // add base to make relative urls work
  );

  Object.entries(searchParams).forEach(([paramKey, paramValue]) => {
    if (paramValue === null || paramValue === undefined) return;

    if (isObject(paramValue))
      url.searchParams.set(paramKey, JSON.stringify(paramValue));
    else url.searchParams.set(paramKey, paramValue.toString());
  });

  if (isRelativeUrl) {
    return url.pathname + url.search + url.hash;
  }

  return url.toString();
};
