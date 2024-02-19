import { isFunction } from "./isFunction";
import { isValue } from "./isValue";

export const isBuffer = (val?: any): boolean => {
  return (
    isValue(val) &&
    isValue(val.constructor) &&
    isFunction(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
};
