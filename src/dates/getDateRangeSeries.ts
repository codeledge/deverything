import { parseDate } from "../helpers/parseDate";
import { DateRange, ISODate } from "../types";

/**
 *
 * @description Generate a series of dates between the start and end dates
 * NOTE: it does NOT include the end date
 */
export const getDateRangeSeries = (
  dateRange: DateRange,
  unit: "day" | "hour" | "minute" | "second" | "calendarMonth"
): ISODate[] => {
  const { startDate, endDate } = dateRange;

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  if (!start || !end || start.getTime() > end.getTime()) {
    throw new Error("Invalid date range");
  }

  const series: string[] = [];
  const current = new Date(start.getTime()); // Clone the startDate to avoid mutating it

  while (current < end) {
    series.push(current.toISOString());

    switch (unit) {
      case "calendarMonth":
        if (start.getUTCDate() > 28) {
          throw new Error(
            "Cannot add months when the start date is greater than 28"
          );
        }
        const currentMonth = current.getUTCMonth();
        current.setUTCMonth(currentMonth + 1);

        break;

      case "day":
        current.setUTCDate(current.getUTCDate() + 1);
        break;

      case "hour":
        current.setUTCHours(current.getUTCHours() + 1);
        break;

      case "minute":
        current.setUTCMinutes(current.getUTCMinutes() + 1);
        break;

      case "second":
        current.setUTCSeconds(current.getUTCSeconds() + 1);
        break;

      default:
        throw new Error(`Unsupported unit: ${unit}`);
    }
  }

  return series;
};
