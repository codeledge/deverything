import { MAX_DATE_MILLISECONDS } from "../constants";

export const randomDate = (start?: Date, end?: Date) => {
  const startDate = start || new Date(-MAX_DATE_MILLISECONDS);
  const endDate = end || new Date(MAX_DATE_MILLISECONDS);
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

export const randomFutureDate = () => {
  // Add a safe margin in the future (i.e. lagging tests). About 5 minutes is enough.
  const safeNow = new Date(new Date().getTime() + 5 * 60000);
  return randomDate(safeNow, undefined);
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
