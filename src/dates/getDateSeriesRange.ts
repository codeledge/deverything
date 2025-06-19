import { parseDate } from "../helpers/parseDate";
import { DateRange, DateSeries } from "../types";

/**
 * @description Returns the smallest and biggest dates from an array of dates in DateRange format
 * @param dates - Array of dates to find the range for
 * @returns DateRange object with startDate (smallest) and endDate (biggest)
 * @throws Error if the array is empty or contains invalid dates
 */
export const getDateSeriesRange = (dateSeries: DateSeries): DateRange => {
  if (!dateSeries || dateSeries.length === 0) {
    throw new Error("Cannot find date range for empty array");
  }

  const parsedDates = dateSeries
    .map((date) => parseDate(date))
    .filter((date): date is Date => date !== undefined);

  if (parsedDates.length === 0) {
    throw new Error("No valid dates found in array");
  }

  const timestamps = parsedDates.map((date) => date.getTime());
  const minTimestamp = Math.min(...timestamps);
  const maxTimestamp = Math.max(...timestamps);

  const startDate = new Date(minTimestamp);
  const endDate = new Date(maxTimestamp);

  return {
    startDate,
    endDate,
  };
};
