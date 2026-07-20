import { formatSlugCharMap } from "../_internals/formatSlugCharMap";

const DEFAULT_REMOVE = /[^\w\s$*_+~.()'"!\-:@]+/g;

/**
 * Transliterate and format a string as a URL/identifier slug.
 *
 * @example formatSlug("Hello World") => "hello-world"
 * @example formatSlug("Crème brûlée") => "creme-brulee"
 * @example formatSlug("José García", { replacement: " ", strict: true }) => "jose garcia"
 */
export const formatSlug = (
  str: string,
  {
    lower = true,
    map = {},
    replacement = "-",
    remove = DEFAULT_REMOVE,
    strict = false,
    trim = true,
  }: {
    /** Convert result to lowercase. @default true */
    lower?: boolean;
    /** Extra character replacements for this call. */
    map?: Record<string, string>;
    /** Character used to replace spaces. @default "-" */
    replacement?: string;
    /** Extra characters to strip (applied per character after mapping). */
    remove?: RegExp;
    /** Keep only ASCII letters, digits, and spaces before applying replacement. @default false */
    strict?: boolean;
    /** Trim leading/trailing whitespace before replacing spaces. @default true */
    trim?: boolean;
  } = {}
): string => {
  let slug = "";
  for (const ch of str.normalize()) {
    let next = map[ch] ?? formatSlugCharMap[ch] ?? ch;
    if (next === replacement) next = " ";
    slug += next.replace(remove, "");
  }

  if (strict) slug = slug.replace(/[^A-Za-z0-9\s]/g, "");
  if (trim) slug = slug.trim();

  slug = slug.replace(/\s+/g, replacement);
  if (lower) slug = slug.toLowerCase();

  return slug;
};
