import {
  MILLISECONDS_IN_DECADE,
  MAX_DATE_MILLISECONDS,
  MILLISECONDS_IN_MINUTE,
} from "../constants/time";
import { parseDate } from "../helpers/parseDate";
import { DateRange } from "../types";
import { isFutureDate, isPastDate } from "../validators";
import { randomInt } from "./randomInt";

const datePlusDecade = (date: Date = new Date()) =>
  datePlusMs(date, MILLISECONDS_IN_DECADE);

const dateMinusDecade = (date: Date = new Date()) =>
  datePlusMs(date, -MILLISECONDS_IN_DECADE);

const datePlusMs = (date: Date, ms: number) => new Date(date.getTime() + ms);

export const randomDate = ({ startDate, endDate }: Partial<DateRange> = {}) => {
  const parsedStartDate = parseDate(startDate);
  const parsedEndDate = parseDate(endDate);

  if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
    console.warn(`randomDate: startDate must be before endDate`);
  }

  const finalStartDate =
    parsedStartDate || //
    dateMinusDecade(parsedEndDate); // uses now if undefined

  const finalEndDate =
    parsedEndDate || //
    datePlusDecade(parsedStartDate); // uses now if undefined

  return new Date(
    randomInt({ min: finalStartDate.getTime(), max: finalEndDate.getTime() })
  );
};

export const randomMaxDate = ({ startDate, endDate }: Partial<DateRange>) => {
  startDate = startDate || new Date(-MAX_DATE_MILLISECONDS);
  endDate = endDate || new Date(MAX_DATE_MILLISECONDS);
  return randomDate({ startDate, endDate });
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
    parseDate(startDate) || datePlusMs(new Date(), 5 * MILLISECONDS_IN_MINUTE); // Add a safe margin in the future (i.e. lagging tests)

  return randomDate({ startDate: finalStartDate, endDate });
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
  return randomDate({ startDate, endDate: finalEndDate });
};

export const randomDateRange = () => {
  const startDate = randomDate();
  const endDate = randomDate({ startDate });

  return {
    endDate,
    startDate,
  };
};
