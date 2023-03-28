import {
  MILLISECONDS_IN_DECADE,
  MAX_DATE_MILLISECONDS,
  MILLISECONDS_IN_MINUTE,
} from "../constants/time";

export const randomDate = (start?: Date, end?: Date) => {
  const startDate = start || new Date(-MILLISECONDS_IN_DECADE);
  const endDate = end || new Date(MILLISECONDS_IN_DECADE);
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

export const randomMaxDate = (start?: Date, end?: Date) => {
  const startDate = start || new Date(-MAX_DATE_MILLISECONDS);
  const endDate = end || new Date(MAX_DATE_MILLISECONDS);
  return randomDate(startDate, endDate);
};

export const randomFutureDate = () => {
  // Add a safe margin in the future (i.e. lagging tests). About 5 minutes is enough.
  const safeNow = new Date(new Date().getTime() + 5 * MILLISECONDS_IN_MINUTE);
  return randomDate(safeNow);
};

export const randomPastDate = () => {
  return randomDate(undefined, new Date());
};

export const randomDateRange = () => {
  const startDate = randomDate();
  const endDate = randomDate(startDate);

  return {
    endDate,
    startDate,
  };
};
