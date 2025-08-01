import { DateLike, Maybe } from "../types";
import { MAX_DATE_MILLISECONDS } from "../constants/time";
import { isEmpty } from "../validators/isEmpty";
import { isJsDate } from "../validators/isJsDate";
import { isNumber } from "../validators/isNumber";
import { isString } from "../validators/isString";

const partialDateRegex = /^\d{4}(-\d{2})?(-\d{2})?$/;

/**
 *
 * @param arg
 * @param options - asUTC: Use this when parsing an incomplete ISO date (e.g. "birth date") where timezone is irrelevant
 * @returns a JS Date object or undefined, by default parsed in local time for incomplete dates
 */
export const parseDate = (
  arg?: Maybe<DateLike>,
  options?: {
    asUTC?: boolean;
  }
) => {
  if (isEmpty(arg)) return;

  if (isNumber(arg)) {
    // Return undefined for non-integer numbers (decimals like 12.1)
    if (!Number.isInteger(arg)) return;
    
    // Return undefined for numbers outside valid JavaScript Date range
    if (arg < -MAX_DATE_MILLISECONDS || arg > MAX_DATE_MILLISECONDS) return;
    
    // Return undefined for NaN or infinite numbers
    if (!Number.isFinite(arg)) return;
  }

  if (isString(arg) && partialDateRegex.test(arg)) {
    // Add time to date string because it will be interpreted
    // as UTC date instead of local time, and there is no
    // circumstance where UTC as default is desired.
    arg = `${
      arg + "-01-01".slice(arg.length - 4) // fill missing month and day if needed
    }T00:00:00`;

    if (options?.asUTC) {
      arg += "Z"; // In this case, force UTC
    }
  }

  const date = new Date(arg!); // ! => isEmpty cannot narrow type

  if (!isJsDate(date)) return;

  return date;
};
