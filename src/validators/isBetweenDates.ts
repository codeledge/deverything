import { parseDate } from "../helpers";
import { DateLike, DateRange } from "../types";

/**
 * Checks if a date falls between two other dates (left inclusive)
 * @param date The date to check
 * @param dateRange The date range to check against
 * @returns true if the date is between the start and end dates (includes startDate, excludes endDate)
 *
 * @alias isInDateRange
 *
 * @example
 * isBetweenDates("2023-06-15", { startDate: "2023-01-01", endDate: "2023-12-31" }) // true
 * isBetweenDates("2023-01-01", { startDate: "2023-01-01", endDate: "2023-12-31" }) // true (includes start)
 * isBetweenDates("2023-12-31", { startDate: "2023-01-01", endDate: "2023-12-31" }) // false (excludes end)
 */
export const isBetweenDates = (
  date: DateLike,
  dateRange: DateRange
): boolean => {
  const targetDate = parseDate(date);
  const start = parseDate(dateRange.startDate);
  const end = parseDate(dateRange.endDate);

  // Return false if any date is invalid
  if (!targetDate || !start || !end) {
    return false;
  }

  return targetDate >= start && targetDate < end;
};

export const isInDateRange = isBetweenDates;
