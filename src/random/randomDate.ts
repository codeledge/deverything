import {
  MILLISECONDS_IN_DECADE,
  MAX_DATE_MILLISECONDS,
  MILLISECONDS_IN_MINUTE,
} from "../constants/time";
import { parseDate } from "../helpers/parseDate";
import { DateLike, DateRange } from "../types";
import { isFutureDate, isPastDate } from "../validators";
import { randomInt } from "./randomInt";

const nowPlusMs = (ms: number) => new Date(new Date().getTime() + ms);

export const randomDate = (startDate?: DateLike, endDate?: DateLike) => {
  const parsedStartDate = parseDate(startDate);
  const parsedEndDate = parseDate(endDate);

  if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
    console.warn(`randomDate: startDate must be before endDate`);
  }

  const finalStartDate =
    parsedStartDate ||
    (parsedEndDate
      ? new Date(parsedEndDate.getTime() - MILLISECONDS_IN_DECADE)
      : nowPlusMs(-MILLISECONDS_IN_DECADE));

  const finalEndDate =
    parsedEndDate ||
    (parsedStartDate
      ? new Date(parsedStartDate.getTime() + MILLISECONDS_IN_DECADE)
      : nowPlusMs(MILLISECONDS_IN_DECADE));

  return new Date(randomInt(finalStartDate.getTime(), finalEndDate.getTime()));
};

export const randomMaxDate = (start?: Date, end?: Date) => {
  const startDate = start || new Date(-MAX_DATE_MILLISECONDS);
  const endDate = end || new Date(MAX_DATE_MILLISECONDS);
  return randomDate(startDate, endDate);
};

export const randomFutureDate = ({
  startDate,
  endDate,
}: Partial<DateRange> = {}) => {
  if (startDate && isPastDate(startDate)) {
    console.warn(`randomFutureDate: startDate must be in the future`);
  }
  if (endDate && isPastDate(endDate)) {
    console.warn(`randomFutureDate: endDate must be in the future`);
  }

  const finalStartDate =
    parseDate(startDate) || nowPlusMs(5 * MILLISECONDS_IN_MINUTE); // Add a safe margin in the future (i.e. lagging tests)

  return randomDate(finalStartDate, endDate);
};

export const randomPastDate = ({
  startDate,
  endDate,
}: Partial<DateRange> = {}) => {
  if (startDate && isFutureDate(startDate)) {
    console.warn(`randomPastDate: startDate must be in the past`);
  }
  if (endDate && isFutureDate(endDate)) {
    console.warn(`randomPastDate: endDate must be in the past`);
  }

  const finalEndDate = parseDate(endDate) || new Date();
  return randomDate(startDate, finalEndDate);
};

export const randomDateRange = () => {
  const startDate = randomDate();
  const endDate = randomDate(startDate);

  return {
    endDate,
    startDate,
  };
};
