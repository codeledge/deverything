import { lastIndex } from "../helpers/lastIndex";
import { last } from "../helpers/last";
import { randomInt } from "./randomInt";
import { sum } from "../math/sum";

export const randomArrayItem = <T>(
  array: T[],
  { weights }: { weights?: number[] } = {}
): T => {
  if (weights && weights.length === array.length) {
    const totalWeight = sum(weights);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < weights.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        return array[i];
      }
    }

    // In case of rounding errors, return the last item
    return last(array);
  }

  return array[randomInt({ min: 0, max: lastIndex(array) })];
};
