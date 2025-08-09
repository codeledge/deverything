import { Maybe } from "../types";

/**
 * Checks if the provided argument is not null, undefined, or NaN.
 *
 * @template T
 * @param {Maybe<T>} arg - The value to check.
 * @returns {arg is T} True if the argument is a value (not null, undefined, or NaN), otherwise false.
 *
 * @example
 * isValue(0); // true
 * isValue(""); // true
 * isValue(null); // false
 * isValue(undefined); // false
 * isValue(NaN); // false
 */

export const isValue = <T>(arg?: Maybe<T>): arg is T => {
  return arg !== undefined && arg !== null && !Number.isNaN(arg);
};
