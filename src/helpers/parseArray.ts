import { ParsedPrimitive, parsePrimitive } from "./parsePrimitive";

/**
 * Split a string into trimmed, non-empty parts using a delimiter.
 *
 * @param str - Input string
 * @param options.separator - Delimiter between values (default ",")
 */
export const parseArray = (
  str: string,
  options?: { separator?: string }
): ParsedPrimitive[] => {
  const { separator = "," } = options ?? {};

  return str
    .split(separator)
    .map((v) => parsePrimitive(v))
    .filter(Boolean);
};
