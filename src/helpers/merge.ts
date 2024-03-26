import { PlainObject } from "../types";
import { isKey, isObject } from "../validators";

/**
 * @description Simple merge function that merges two objects, arrays get overwritten, no options
 *
 */
export const merge = (target: PlainObject, source: PlainObject) => {
  const merger: PlainObject = {};
  Object.keys(target).forEach((key) => {
    merger[key] = isObject(target[key]) ? merge({}, target[key]) : target[key];
  });
  Object.keys(source).forEach((key) => {
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
