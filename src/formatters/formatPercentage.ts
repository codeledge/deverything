import { clamp } from "../helpers";

/**
 *
 * @example formatPercentage(1) => 100%
 * @example formatPercentage(0, { digits: 2 }) => 0.00%
 */
export const formatPercentage = (
  value: number,
  {
    digits,
  }: {
    digits?: number;
  } = {}
): string => {
  return `${clamp({
    number: value * 100,
    min: 0,
    max: 100,
  }).toFixed(digits || 0)}%`;
};
