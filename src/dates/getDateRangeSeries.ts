import { parseDate } from "../helpers/parseDate";
import { DateRange, ISODate } from "../types";

/**
 *
 * @description Generate a series of dates between the start and end dates
 * NOTE: it does NOT include the end date
 */
export const getDateRangeSeries = (
  dateRange: DateRange,
  unit: "days" | "hours" | "minutes" | "seconds"
): ISODate[] => {
  const series: ISODate[] = [];
  const unitMap: Record<typeof unit, number> = {
    days: 24 * 60 * 60 * 1000, // milliseconds in a day
    hours: 60 * 60 * 1000, // milliseconds in an hour
    minutes: 60 * 1000, // milliseconds in a minute
    seconds: 1000, // milliseconds in a second
  };

  const increment = unitMap[unit];

  const { startDate, endDate } = dateRange;

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  if (!start || !end || start.getTime() > end.getTime()) {
    throw new Error("Invalid date range");
  }

  // Ensure we are working with time in milliseconds
  let currentTime = start.getTime();
  const endTime = end.getTime();

  while (currentTime < endTime) {
    series.push(new Date(currentTime).toISOString());
    currentTime += increment; // Move forward by the specified unit
  }

  return series;
};
