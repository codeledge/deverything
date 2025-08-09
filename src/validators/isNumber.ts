import { INT4_MAX, INT4_MIN } from "../constants/numbers";
import { isOutside } from "../math/isOutside";

export const isInt = (arg?: any) => Number.isInteger(arg);

export const isEven = (arg?: any) => isInt(arg) && !(arg % 2);

export const isOdd = (arg?: any) => isInt(arg) && !!(arg % 2);

export const isPositiveInt = (arg?: any) => isInt(arg) && arg > 0;

export const isNegativeInt = (arg?: any) => isInt(arg) && arg < 0;

export const isNumber = (arg?: any): arg is number => {
  return (
    Object.prototype.toString.apply(arg) === "[object Number]" && isFinite(arg)
  );
};

export const isBigInt = (arg?: any): arg is BigInt => {
  return Object.prototype.toString.apply(arg) === "[object BigInt]";
};

export const isBigIntString = (arg: string): boolean => {
  try {
    return BigInt(arg) > Number.MAX_SAFE_INTEGER;
  } catch (e) {
    return false;
  }
};

export const isOutsideInt4 = (num: number): boolean => {
  return isOutside(num, INT4_MIN, INT4_MAX);
};
