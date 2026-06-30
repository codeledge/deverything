import { clamp } from "../helpers";

/**
 * @example formatPercentageNumber(0.123456) => 12.3456
 * @example formatPercentageNumber(0.123456, { digits: 2 }) => 12.35
 */
export const formatPercentageNumber = (
  value: number,
  {
    digits,
    sign,
  }: {
    digits?: number;
    sign?: boolean;
  } = {}
): string => {
  let prefix = "";

  if (sign) {
    prefix = value > 0 ? "+" : "";
  }

  return `${prefix}${clamp({
    number: value * 100,
    min: -100,
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
    sign,
  }: {
    digits?: number;
    sign?: boolean;
  } = {}
): string => {
  return `${formatPercentageNumber(value, { digits, sign })}%`;
};
