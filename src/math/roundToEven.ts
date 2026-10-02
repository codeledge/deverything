/**
 * Rounds a number to the nearest even integer, e.g. for video dimensions, which H.264
 * encoders require to be even.
 *
 * Not banker's rounding ("round half to even"): the result is always even. An odd integer is
 * halfway between two evens and rounds up, like `Math.round` (3 => 4, -3 => -2).
 *
 * @param number The number to round. NaN returns NaN.
 * @param options.min Lower bound, applied before rounding, so the result is never below the
 * nearest even number to it. Useful when 0 is not a valid result (e.g. `{ min: 2 }` for a
 * dimension).
 *
 * @example
 * roundToEven(823); // 824
 * roundToEven(822.4); // 822
 * roundToEven(2139 * (1280 / 2139)); // 1280, not 1278 as flooring 1279.9999999999998 would give
 * roundToEven(0.3, { min: 2 }); // 2
 */
export const roundToEven = (
  number: number,
  options?: { min?: number }
): number => {
  const { min } = options ?? {};
  const bounded = min === undefined ? number : Math.max(number, min);

  // `+ 0` turns the -0 that Math.round gives for small negatives into 0.
  return 2 * Math.round(bounded / 2) + 0;
};
