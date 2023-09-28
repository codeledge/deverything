import { getKeys } from "../helpers";
import { isArray } from "./isArray";
import { isFunction } from "./isFunction";
import { isObject } from "./isObject";

export const isSame = (value1: any, value2: any): boolean => {
  if (value1 === value2) {
    return true;
  }

  if (isArray(value1) && isArray(value2)) {
    if (value1.length !== value2.length) return false;
    return value1.every((value, index) => isSame(value, value2[index]));
  }

  if (isObject(value1) && isObject(value2)) {
    const keys = getKeys(value1);
    if (keys.length !== getKeys(value2).length) return false;

    return keys.every((key: string) => {
      return isSame(value1[key], value2[key]);
    });
  }

  if (isFunction(value1) && isFunction(value2)) {
    return value1.toString() === value2.toString();
  }

  return false;
};
