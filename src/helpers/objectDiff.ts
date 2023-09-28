import { PlainObject } from "../types";
import { isSame } from "../validators/isSame";
import { getKeys } from "./getKeys";

export const objectDiff = (
  leftObject: PlainObject,
  rightObject: PlainObject
) => {
  var diff: PlainObject = {};
  const allKeys = new Set([...getKeys(leftObject), ...getKeys(rightObject)]);

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
