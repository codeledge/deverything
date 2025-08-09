/**
 * Checks if the provided argument is a valid JavaScript Date object.
 *
 * @param arg - The value to check.
 * @returns True if the argument is a Date object and is valid (not NaN), otherwise false.
 *
 * @example
 * isJsDate(new Date()); // true
 * isJsDate("2023-01-01"); // false
 * isJsDate(new Date("invalid-date")); // false
 */

export const isJsDate = (arg?: any): arg is Date =>
  Object.prototype.toString.call(arg) === "[object Date]" &&
  !isNaN(arg as unknown as number);
