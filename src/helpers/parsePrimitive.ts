import { isNumeric } from "../validators/isNumeric";

export type ParsedPrimitive = string | number | boolean | null | undefined;

/**
 * Coerce a string to a boolean, null, undefined, or number when it matches common
 * literal spellings (`isNumeric` for numeric strings); otherwise returns the trimmed string.
 *
 * Keyword matching is case-insensitive (`TRUE`, `Null`, …). Empty after trim yields `""`.
 *
 * @param options.coerceBoolean - When true, also maps `yes`/`no`, `on`/`off`, `y`/`n` to booleans before numeric parsing.
 */
export const parsePrimitive = (
  str: string,
  options?: { coerceBoolean?: boolean }
): ParsedPrimitive => {
  const { coerceBoolean = false } = options ?? {};
  const trimmed = str.trim();

  if (trimmed === "") {
    return "";
  }

  if (trimmed === "NaN") {
    return NaN;
  }
  if (trimmed === "Infinity") {
    return Infinity;
  }
  if (trimmed === "-Infinity") {
    return -Infinity;
  }

  const keyword = trimmed.toLowerCase();
  if (keyword === "true") {
    return true;
  }
  if (keyword === "false") {
    return false;
  }
  if (keyword === "null") {
    return null;
  }
  if (keyword === "undefined") {
    return undefined;
  }

  if (coerceBoolean) {
    if (keyword === "yes" || keyword === "on" || keyword === "y") {
      return true;
    }
    if (keyword === "no" || keyword === "off" || keyword === "n") {
      return false;
    }
  }

  if (isNumeric(trimmed)) {
    return Number(trimmed);
  }

  return trimmed;
};
