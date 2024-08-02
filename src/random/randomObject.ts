import { array } from "../helpers";
import { PlainObject } from "../types";
import { randomArray } from "./randomArray";
import { randomArrayItem } from "./randomArrayItem";
import { randomInt } from "./randomInt";
import { randomValue } from "./randomValue";
import { randomNoun } from "./randomWord";

export const randomObject = ({
  maxDepth = 5,
  circular = false,
}: {
  maxDepth?: number;
  circular?: boolean;
} = {}) => {
  const getRandomObject = (depth: number = 0): PlainObject => {
    if (depth >= maxDepth) return {};

    const keys = array(randomInt({ min: 1, max: 5 }), randomNoun);
    return keys.reduce((partial, key) => {
      const valueOrObject = randomArrayItem(["value", "object", "array"]);

      if (valueOrObject === "object") {
        const object = getRandomObject(depth + 1);
        partial[key] = object;
        if (
          circular &&
          randomArrayItem([true, false], { weights: [0.2, 0.8] })
        ) {
          object.circular = object;
        }
      } else if (valueOrObject === "array") {
        const array = randomArray();
        partial[key] = array;
      } else {
        const value = randomValue();
        partial[key] = value;
      }
      return partial;
    }, {} as PlainObject);
  };

  const object = getRandomObject();

  return object;
};
