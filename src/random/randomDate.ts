import { MAX_DATE_MILLISECONDS } from "../constants";

export const randomDate = (start?: Date, end?: Date) => {
  const startDate = start || new Date(-MAX_DATE_MILLISECONDS);
  const endDate = end || new Date(MAX_DATE_MILLISECONDS);
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

// Add a safe margin in the future (i.e. lagging tests). About 5 minutes is enough.
export const randomFutureDate = (end?: Date) => {
  return randomDate(new Date(new Date().getTime() + 5 * 60000), end);
};

export const randomPastDate = (start?: Date) => {
  return randomDate(start, new Date());
};
