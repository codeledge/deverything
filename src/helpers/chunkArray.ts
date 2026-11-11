import { isPositiveInt } from "../validators/isNumber";

/**
 * Splits `array` into chunks of `size` items; the last chunk may be shorter.
 *
 * @throws RangeError when `size` is not a positive integer (it would never end).
 * @example chunkArray([1, 2, 3], 2) // [[1, 2], [3]]
 */
export const chunkArray = <T>(array: readonly T[], size: number): T[][] => {
  if (!isPositiveInt(size)) {
    throw new RangeError(
      `chunkArray: size must be a positive integer, got ${size}`
    );
  }
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};
