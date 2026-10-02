const displayNamesByLocale = new Map<string, Intl.DisplayNames>();

const getDisplayNames = (locale: string): Intl.DisplayNames => {
  let displayNames = displayNamesByLocale.get(locale);
  if (!displayNames) {
    displayNames = new Intl.DisplayNames([locale], {
      type: "region",
      fallback: "code",
    });
    displayNamesByLocale.set(locale, displayNames);
  }
  return displayNames;
};

/**
 * Localised display name for an ISO 3166-1 alpha-2 country code.
 * Falls back to the original input when the code is unrecognised or invalid.
 *
 * @example formatCountryName("GB") => "United Kingdom"
 * @example formatCountryName("us") => "United States"
 * @example formatCountryName("DE", { locale: "de" }) => "Deutschland"
 * @example formatCountryName("XX") => "XX"
 */
export const formatCountryName = (
  countryCode: string,
  {
    locale = "en",
  }: {
    /** BCP 47 tag for the display language. @default "en" */
    locale?: string;
  } = {}
): string => {
  try {
    return getDisplayNames(locale).of(countryCode.toUpperCase()) ?? countryCode;
  } catch {
    return countryCode;
  }
};
