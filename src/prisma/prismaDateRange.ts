import { parseDate } from "../helpers/parseDate";
import { DateRange } from "../types/Date";

export const prismaDateRange = ({ startDate, endDate }: DateRange) => {
  const gte = parseDate(startDate);
  const lt = parseDate(endDate);

  if (!gte || !lt) {
    throw new Error("prismaDateRange: Invalid date range");
  }

  return {
    gte,
    lt,
  };
};
