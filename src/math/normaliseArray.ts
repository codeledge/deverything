import { max } from "./max";
import { min } from "./min";
import { normaliseNumber } from "./normaliseNumber";

export const normaliseArray = (values: number[]) => {
  const minValue = min(values);
  const maxValue = max(values);

  return values.map((value) => normaliseNumber(value, minValue, maxValue));
};
