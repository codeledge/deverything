import { parseDate } from "../helpers";
import { DateLike } from "../types";

export const isFutureDate = (
  arg: DateLike,
  { referenceDate }: { referenceDate?: DateLike } = {}
): boolean => {
  const date = parseDate(arg);

  return !!date && date > (parseDate(referenceDate) ?? new Date());
};
