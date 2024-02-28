import { clamp } from "../helpers";

/**
 *
 * @example formatProgress({ index: -1, total: 10 }) => [1/10] capped
 * @example formatProgress({ index: 1, total: 10 }) => [2/10]
 * @example formatProgress({ index: 11, total: 10 }) => [10/10] capped
 */
export const formatProgress = ({
  index,
  total,
}: {
  index: number;
  total: number;
}): string => {
  return `[${clamp({
    number: index + 1,
    min: 1,
    max: total,
  })}/${total}]`;
};
