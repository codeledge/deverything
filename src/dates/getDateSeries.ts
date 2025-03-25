import { ISODate } from "../types";

/**
 *
 * @deprecated use getDateRangeSeries instead
 */
export const getDateSeries = (
  startDate: Date,
  endDate: Date,
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

  // Ensure we are working with time in milliseconds
  let current = startDate.getTime();
  const end = endDate.getTime();

  while (current <= end) {
    series.push(new Date(current).toISOString());
    current += increment; // Move forward by the specified unit
  }

  return series;
};
