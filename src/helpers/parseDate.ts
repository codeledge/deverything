import { DateLike, Maybe } from "../types";
import { isEmpty } from "../validators/isEmpty";
import { isJsDate } from "../validators/isJsDate";
import { isString } from "../validators/isString";

const partialDateRegex = /^\d{4}(-\d{2})?(-\d{2})?$/;

export const parseDate = (arg?: Maybe<DateLike>) => {
  if (isEmpty(arg)) return;

  if (isString(arg) && partialDateRegex.test(arg)) {
    // Add time to date string because it will be interpreted
    // as UTC date instead of local time, and there is no
    // circumstance where UTC as default is desired.
    arg = `${
      arg + "-01-01".slice(arg.length - 4) // fill missing month and day if needed
    }T00:00:00`;
  }

  const date = new Date(arg!); // ! => isEmpty cannot narrow type

  if (!isJsDate(date)) return;

  return date;
};
