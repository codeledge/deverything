import { clamp } from "../helpers";

/**
 * @example formatPercentageNumber(0.123456) => 12.3456
 * @example formatPercentageNumber(0.123456, { digits: 2 }) => 12.35
 */
export const formatPercentageNumber = (
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
  }).toFixed(digits || 0)}`;
};

/**
 *
 * @example formatPercentage(1) => "100%"
 * @example formatPercentage(0, { digits: 2 }) => "0.00%"
 */
export const formatPercentage = (
  value: number,
  {
    digits,
  }: {
    digits?: number;
  } = {}
): string => {
  return `${formatPercentageNumber(value, { digits })}%`;
};
