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
  if (current === 0 && previous !== 0) return -100;
  if (current !== 0 && previous === 0) return 100;
  const perChange = ((current - previous) * 100) / previous;
  return parseFloat(perChange.toFixed(2));
};
