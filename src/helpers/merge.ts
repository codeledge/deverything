import { PlainObject } from "../types";
import { isKey, isObject } from "../validators";
import { getKeys } from "./getKeys";

/**
 * @description Simple merge function that merges two objects, arrays get overwritten, no options
 *
 */
export const merge = (target: PlainObject, source: PlainObject) => {
  const merger: PlainObject = {};
  getKeys(target).forEach((key) => {
    merger[key] = isObject(target[key]) ? merge({}, target[key]) : target[key];
  });
  getKeys(source).forEach((key) => {
    if (isKey(key, target))
      merger[key] =
        isObject(target[key]) && isObject(source[key])
          ? merge(target[key], source[key])
          : source[key];
    else
      merger[key] = isObject(source[key])
        ? merge({}, source[key])
        : source[key];
  });
  return merger;
};
