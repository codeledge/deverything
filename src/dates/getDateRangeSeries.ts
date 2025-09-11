import { parseDate } from "../helpers/parseDate";
import { DateRange, ISODate } from "../types";

/**
 *
 * @description Generate a series of dates between the start and end dates
 * NOTE: it does NOT include the end date, this is intentional
 */
export const getDateRangeSeries = (
  dateRange: DateRange,
  unit:
    | "second"
    | "minute"
    | "hour"
    | "day"
    | "week"
    | "calendarMonth"
    | "calendarYear",
  options: {
    step?: number;
  } = {}
): ISODate[] => {
  const { startDate, endDate } = dateRange;

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  if (!start || !end || start.getTime() > end.getTime()) {
    throw new Error("Invalid date range");
  }

  const series: string[] = [];
  const current = new Date(start.getTime()); // Clone the startDate to avoid mutating it

  const step = options?.step ?? 1;

  // eslint-disable-next-line no-unmodified-loop-condition
  while (current < end) {
    series.push(current.toISOString());

    switch (unit) {
      case "calendarYear":
        if (start.getUTCMonth() === 1 && start.getUTCDate() === 29) {
          throw new Error(
            "Cannot add years when the start date is Feb 29, it may lead to unexpected results"
          );
        }
        {
          const currentYear = current.getUTCFullYear();
          current.setUTCFullYear(currentYear + step);
        }

        break;

      case "calendarMonth":
        if (start.getUTCDate() > 28) {
          throw new Error(
            "Cannot add months when the start day of month is greater than 28, it may lead to unexpected results"
          );
        }
        {
          const currentMonth = current.getUTCMonth();
          current.setUTCMonth(currentMonth + step);
        }

        break;

      case "day":
        current.setUTCDate(current.getUTCDate() + step);
        break;

      case "week":
        current.setUTCDate(current.getUTCDate() + step * 7);
        break;

      case "hour":
        current.setUTCHours(current.getUTCHours() + step);
        break;

      case "minute":
        current.setUTCMinutes(current.getUTCMinutes() + step);
        break;

      case "second":
        current.setUTCSeconds(current.getUTCSeconds() + step);
        break;

      default:
        throw new Error(`Unsupported unit: ${unit}`);
    }
  }

  return series;
};
