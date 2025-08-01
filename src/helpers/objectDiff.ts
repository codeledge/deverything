import { PlainObject } from "../types";
import { isSame } from "../validators/isSame";

export const objectDiff = (
  leftObject: PlainObject,
  rightObject: PlainObject
) => {
  let diff: PlainObject = {};
  const allKeys = new Set([
    ...Object.keys(leftObject),
    ...Object.keys(rightObject),
  ]);

  for (const key of allKeys) {
    if (!isSame(rightObject[key], leftObject[key])) {
      diff[key] = {
        from: leftObject[key],
        to: rightObject[key],
      };
    }
  }

  return diff;
};
