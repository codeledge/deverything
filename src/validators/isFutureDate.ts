import { parseDate } from "../helpers";
import { DateLike } from "../types";

export const isFutureDate = (
  arg: DateLike,
  { referenceDate }: { referenceDate?: DateLike } = {}
): boolean => {
  const date = parseDate(arg);

  const reference = referenceDate ? parseDate(referenceDate) : new Date();
  if (!reference)
    throw new Error(`[isFutureDate] Invalid referenceDate: ${referenceDate}`);

  return !!date && date > reference;
};
