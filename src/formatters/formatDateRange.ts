import { parseDate } from "../helpers/parseDate";
import { Datey } from "../types";

/**
 * @example formatDateRange(startDate, endDate) => "2026-02-09T00:00:00.000Z ⮕ 2026-02-10T00:00:00.000Z"
 */
export const formatDateRange = (startDate: Datey, endDate: Datey): string => {
  return `${parseDate(startDate)?.toISOString()} ⮕ ${parseDate(endDate)?.toISOString()}`;
};
