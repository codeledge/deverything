import { array } from "../helpers";
import { PlainObject } from "../types";
import { randomInt } from "./randomInt";
import { randomValue } from "./randomValue";
import { randomNoun } from "./randomWord";

export const randomObject = ({ maxDepth = 5 }: { maxDepth?: number } = {}) => {
  const getRandomObject = (depth: number): PlainObject => {
    if (depth >= maxDepth) return {};

    const keys = array(randomInt({ min: 1, max: 5 }), randomNoun);
    return keys.reduce((partial, key) => {
      partial[key] = randomValue() || getRandomObject(depth + 1);
      return partial;
    }, {} as PlainObject);
  };

  return getRandomObject(0);
};
