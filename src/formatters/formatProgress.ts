import { clamp } from "../helpers";

/**
 * @deprecated Use `formatIndexProgress` instead.
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
