import { isValue } from "../validators/isValue";

// Max js digits is theoretically 17, but is actually 16, see Math.random output.
export const JS_MAX_DIGITS = 16;

// TODO: with big numbers there will be less digits
export const randomFloat = (
  min = -9,
  max = 9,
  decimals?: number // toFixed accepts max 100 anyway... even if the docs say 20
) => {
  const float = Math.random() * (max - min) + min;

  if (isValue(decimals)) return parseFloat(float.toFixed(decimals));

  return float;
};

// TODO: randomBigFloat
