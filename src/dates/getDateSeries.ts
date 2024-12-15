import { ISODate } from "../types";

export const getDateSeries = (
  startDate: Date,
  endDate: Date,
  unit: "days" | "hours" | "minutes" | "seconds"
): Record<ISODate, number> => {
  const series: Record<ISODate, number> = {};
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
    series[new Date(current).toISOString()] = 0;
    current += increment; // Move forward by the specified unit
  }

  return series;
};
