/**
 * Returns the start of yesterday (00:00:00.000) in UTC time.
 */
export const startOfUTCYesterday = (): Date => {
  const tomorrow = new Date();

  tomorrow.setUTCDate(tomorrow.getUTCDate() - 1);
  return new Date(
    Date.UTC(
      tomorrow.getUTCFullYear(),
      tomorrow.getUTCMonth(),
      tomorrow.getUTCDate()
    )
  );
};
