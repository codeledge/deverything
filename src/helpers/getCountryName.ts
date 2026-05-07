const countryNames = new Intl.DisplayNames(["en"], { type: "region" });

/**
 * Returns the English display name for an alpha-2 (e.g. "GB") country code.
 * Falls back to the original input when the code is unrecognised.
 */
export const getCountryName = (countryCode: string): string | undefined => {
  if (countryCode.length !== 2)
    throw new Error("Invalid country code, must be 2 characters long");
  return countryNames.of(countryCode.toUpperCase());
};
