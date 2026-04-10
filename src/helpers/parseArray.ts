import { isEmptyString } from "../validators";
import { ParsedPrimitive, parsePrimitive } from "./parsePrimitive";

/**
 * Split a string into trimmed, non-empty parts using a delimiter.
 *
 * @param str - Input string
 * @param options.separator - Delimiter between values (default ",")
 */
export const parseArray = (
  str: string,
  {
    separator = ",",
    uniqueValues = false,
  }: { separator?: string; uniqueValues?: boolean } = {}
): ParsedPrimitive[] => {
  return str
    .split(separator)
    .map((v) => parsePrimitive(v))
    .filter((v, index, self) => {
      // Keep 0, null, undefined etc. but not empty strings
      if (isEmptyString(v as string)) {
        return false;
      }
      if (uniqueValues) {
        return self.indexOf(v) === index; // keep it simple, don't use Set
      }
      return true;
    });
};
