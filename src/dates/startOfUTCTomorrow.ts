/**
 * Returns the start of tomorrow (00:00:00.000) in UTC time.
 *
 * @param date - The date to calculate tomorrow from. Defaults to current date if not provided.
 * @returns A new Date object set to the start of tomorrow in UTC time.
 */
export const startOfUTCTomorrow = (): Date => {
  const tomorrow = new Date();

  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  return new Date(
    Date.UTC(
      tomorrow.getUTCFullYear(),
      tomorrow.getUTCMonth(),
      tomorrow.getUTCDate()
    )
  );
};
