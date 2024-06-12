import { isPositiveInt } from "../validators";

export const percentageChange = ({
  previous,
  current,
}: {
  previous: number;
  current: number;
}): number => {
  if (!isPositiveInt(previous) || !isPositiveInt(current)) return 0;
  if (current === 0 && previous === 0) return 0;
  if (current === 0 && previous !== 0) return -1;
  if (current !== 0 && previous === 0) return 1;
  const perChange = (current - previous) / previous;
  return parseFloat(perChange.toFixed(4)); // 4 decimal places so when formatting to % two decimal places are shown
};
