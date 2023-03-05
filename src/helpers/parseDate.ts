import { DateLike, Maybe } from "../types";
import { isEmpty } from "../validators/isEmpty";
import { isJsDate } from "../validators/isJsDate";

export const parseDate = (arg?: Maybe<DateLike>) => {
  if (isEmpty(arg)) return;

  const date = new Date(arg!);

  if (!isJsDate(date)) return;

  return date;
};
