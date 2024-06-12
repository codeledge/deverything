export const normaliseNumber = (
  value: number,
  minValue: number,
  maxValue: number
) => (value - minValue) / (maxValue - minValue);
