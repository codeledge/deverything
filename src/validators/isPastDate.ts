import { parseDate } from "../helpers";
import { DateLike } from "../types";

export const isPastDate = (
  arg: DateLike,
  { referenceDate }: { referenceDate?: DateLike } = {}
): boolean => {
  const date = parseDate(arg);

  const reference = referenceDate ? parseDate(referenceDate) : new Date();
  if (!reference)
    throw new Error(`[isPastDate] Invalid referenceDate: ${referenceDate}`);

  return !!date && date < reference;
};
