/**
 *
 * @param previous Positive percentage i.e. 0.1 for 10%
 * @param current Positive percentage i.e. 0.2 for 20%
 * @returns
 */
export const percentageChange = (previous: number, current: number): number => {
  if (previous < 0 || current < 0) return 0;
  if (current === 0 && previous === 0) return 0;
  if (current === 0 && previous !== 0) return -1;
  if (current !== 0 && previous === 0) return 1;
  const perChange = (current - previous) / previous;
  return parseFloat(perChange.toFixed(4)); // 4 decimal places so when formatting to % two decimal places are shown
};
