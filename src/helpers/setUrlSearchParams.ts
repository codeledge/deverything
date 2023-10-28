export const setUrlSearchParams = (
  currentURL: string,
  searchParams: Record<string, string | number | boolean> = {}
) => {
  const isRelativeUrl = currentURL.startsWith("/");
  const url = new URL(
    currentURL,
    isRelativeUrl ? "https://deverything.dev/" : undefined // add base to make relative urls work
  );

  Object.entries(searchParams).forEach(([paramKey, paramValue]) => {
    url.searchParams.set(paramKey, paramValue.toString());
  });

  if (isRelativeUrl) {
    return url.pathname + url.search + url.hash;
  }

  return url.toString();
};
