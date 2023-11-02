/**
 *
 * @example formatNumber(1000, { compact: true }) // 1K
 * @example formatNumber(1111, { maxDigits: 2 }) // 1,100
 * @example formatNumber(111111.123123123) // 111,111.123
 */
export const formatNumber = (
  value: number,
  {
    compact,
    maxDigits,
  }: {
    compact?: boolean;
    maxDigits?: number;
  } = {}
): string => {
  const formatter = Intl.NumberFormat("en", {
    notation: compact ? "compact" : "standard",
    maximumSignificantDigits: maxDigits,
  });
  return formatter.format(value);
};
