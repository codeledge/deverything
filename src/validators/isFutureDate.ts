import { parseDate } from "../helpers";
import { DateLike } from "../types";

export const isFutureDate = (arg: DateLike): boolean => {
  const date = parseDate(arg);
  return !!date && date > new Date();
};
