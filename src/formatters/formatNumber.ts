import { isNumber } from "../validators/isNumber";

/**
 *
 * @example formatNumber(1000, { compact: true }) // 1K
 * @example formatNumber(1111, { maxDigits: 2 }) // 1,100
 * @example formatNumber(111111.123123123) // 111,111.123
 * @example formatNumber(0.12345, { percentage: true, maxDigits: 2 }) // '12.35%' (rounding)
 */
export const formatNumber = (
  value: number,
  {
    compact,
    maxDigits,
    percentage,
  }: {
    compact?: boolean;
    maxDigits?: number;
    percentage?: boolean;
  } = {}
): string => {
  if (percentage) {
    const useValue = isNumber(value) ? value : 0;
    const number = (useValue * 100).toFixed(maxDigits || 0);
    return `${number}%`;
  }

  const formatter = Intl.NumberFormat("en", {
    notation: compact ? "compact" : "standard",
    maximumSignificantDigits: maxDigits,
  });

  return formatter.format(value);
};
