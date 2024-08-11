/**
 * @returns a string with only alphanumeric characters
 * @example filterAlphanumeric("!abc()") // returns "abc"
 */
export const filterAlphanumeric = (string: string) => {
  return string.replace(/[^a-zA-Z0-9]/g, "");
};
