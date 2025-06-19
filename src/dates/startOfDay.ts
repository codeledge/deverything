/**
 * Note: This function does not use defaults, use startOfToday instead.
 *
 * @param day - The date to get the start of the day for.
 * @returns A new Date object set to the start of the day.
 */
export const startOfDay = (day: Date): Date => {
  return new Date(day.getFullYear(), day.getMonth(), day.getDate());
};
