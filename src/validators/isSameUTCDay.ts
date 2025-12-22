import { parseDate } from "../helpers";
import { DateLike } from "../types";

/**
 * Checks if two dates are on the same UTC day (year, month, day).
 * Returns false if either value is not a valid Date.
 *
 * @example
 * isSameUTCDay("2023-06-15", "2023-06-15") // true
 * isSameUTCDay("2023-06-15", "2023-06-16") // false
 * isSameUTCDay("2023-06-15", "2023-06-15T00:00:00Z") // true
 * isSameUTCDay("2023-06-15", "2023-06-15T00:00:00.000Z") // true
 */
export const isSameUTCDay = (
  date1Input: DateLike,
  date2Input: DateLike
): boolean => {
  const date1UTC = parseDate(date1Input, { asUTC: true }); // asUTC just in case partial date is passed
  const date2UTC = parseDate(date2Input, { asUTC: true });
  if (!date1UTC || !date2UTC) return false;

  console.log(date1UTC.toISOString(), date2UTC.toISOString());
  return (
    date1UTC.getUTCFullYear() === date2UTC.getUTCFullYear() &&
    date1UTC.getUTCMonth() === date2UTC.getUTCMonth() &&
    date1UTC.getUTCDate() === date2UTC.getUTCDate()
  );
};
