import { PlainObject } from "../types/Object";

/**
 *
 * @example formatCookies({}) => ""
 * @example formatCookies({ session: "123", _ga: 123 }) => "session=123; _ga=123"
 */
export const formatCookies = (object: PlainObject): string => {
  return Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");
};
