import { clamp } from "../helpers";

/**
 *
 * @example formatIndexProgress(-1, 10) => [1/10] capped
 * @example formatIndexProgress(1, 10) => [2/10]
 * @example formatIndexProgress(11, 10) => [10/10] capped
 */
export const formatIndexProgress = (index: number, total: number): string => {
  return `[${clamp({
    number: index + 1,
    min: 1,
    max: total,
  })}/${total}]`;
};
