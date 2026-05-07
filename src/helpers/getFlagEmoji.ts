/**
 * Returns the flag emoji for an ISO 3166-1 country code.
 * Accepts alpha-2 (e.g. "GB") codes.
 * Returns broken emoji when the code is unrecognised.
 */
export const getFlagEmoji = (countryCode: string): string => {
  if (countryCode.length !== 2)
    throw new Error("Invalid country code, must be 2 characters long");

  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};
