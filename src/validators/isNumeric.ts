import { isNumber } from "./isNumber";
import { isSpacedString } from "./isSpacedString";
import { isString } from "./isString";

export const isNumeric = (arg: number | string): boolean => {
  if (isNumber(arg)) return true;

  if (!isString(arg) || isSpacedString(arg)) return false;

  return !isNaN(parseFloat(arg));
};
