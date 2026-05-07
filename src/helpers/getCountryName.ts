const countryNames = new Intl.DisplayNames(["en"], { type: "region" });

/**
 * Returns the English display name for an alpha-2 (e.g. "GB") country code.
 * Falls back to the original input when the code is unrecognised.
 */
export const getCountryName = (countryCode: string): string | undefined => {
  return countryNames.of(countryCode.toUpperCase());
};
