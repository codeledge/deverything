import { isStrictlyBetween } from "../math/isStrictlyBetween";
import { isNumber } from "../validators/isNumber";

const SUB_ONE_COMPACT_TIERS = [
  { divisor: 1e-9, suffix: "n" }, // nano:  < 0.000001
  { divisor: 1e-6, suffix: "μ" }, // micro: < 0.001
  { divisor: 1e-3, suffix: "m" }, // milli: < 1
] as const;

/**
 *
 * @example formatNumber(1000, { compact: true }) // "1K"
 * @example formatNumber(0.001, { compact: true }) // "1m"
 * @example formatNumber(0.000001, { compact: true }) // "1μ"
 * @example formatNumber(0.000000001, { compact: true, unit: "s" }) // "1ns"
 * @example formatNumber(1111, { maxDigits: 2 }) // "1,100" (2 significant digits)
 * @example formatNumber(111111.123123123) // "111,111.123" (default 3 decimal places)
 * @example formatNumber(0.12345, { percentage: true, maxDigits: 2 }) // "12.35%"
 */
export const formatNumber = (
  value: number,
  {
    compact,
    maxDigits,
    percentage,
    unit = "",
  }: {
    compact?: boolean;
    maxDigits?: number;
    percentage?: boolean;
    unit?: string;
  } = {}
): string => {
  if (percentage) {
    const useValue = isNumber(value) ? value : 0;
    const number = (useValue * 100).toFixed(maxDigits || 0);
    return `${number}%`;
  }

  // < 1 case
  if (compact && isStrictlyBetween(Math.abs(value), 0, 1)) {
    const abs = Math.abs(value);
    const tier =
      abs < 1e-6
        ? SUB_ONE_COMPACT_TIERS[0] // nano
        : abs < 1e-3
          ? SUB_ONE_COMPACT_TIERS[1] // micro
          : SUB_ONE_COMPACT_TIERS[2]; // milli

    const scaled = value / tier.divisor;
    const formatter = Intl.NumberFormat("en", {
      maximumSignificantDigits: maxDigits ?? 3,
    });
    return `${formatter.format(scaled)}${tier.suffix}${unit}`;
  }

  // > 1 case
  const formatter = Intl.NumberFormat("en", {
    notation: compact ? "compact" : "standard",
    maximumSignificantDigits: maxDigits,
  });

  return `${formatter.format(value)}${unit}`;
};
