/**
 *
 * @example normaliseNumber(50, 0, 100) => 0.5
 */
export const normaliseNumber = (
  value: number,
  minValue: number,
  maxValue: number
) => (value - minValue) / (maxValue - minValue);
