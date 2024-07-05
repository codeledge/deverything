import { max } from "./max";
import { min } from "./min";
import { normaliseNumber } from "./normaliseNumber";

/**
 * Normalises an array of numbers
 * @example normaliseArray([1, 2, 3]) => [0, 0.5, 1]
 */
export const normaliseArray = (values: number[]) => {
  const minValue = min(values);
  const maxValue = max(values);

  return values.map((value) => normaliseNumber(value, minValue, maxValue));
};
