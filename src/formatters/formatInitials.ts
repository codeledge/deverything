import { cleanSpaces } from "../helpers/cleanSpaces";

/**
 * First letters of the first one or two words, capitalized.
 *
 * @example formatInitials("Ciao Bello") => "CB"
 * @example formatInitials("hello There") => "HT"
 * @example formatInitials("JavaScript") => "J"
 * @example formatInitials("Three words here") => "TW"
 * @example formatInitials(undefined) => ""
 */
export const formatInitials = (str?: string | null): string => {
  if (!str) {
    return "";
  }
  return cleanSpaces(str)
    .split(" ")
    .map((word) => [...word][0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");
};
