import { isNumber } from "./isNumber";
import { isSpacedString } from "./isSpacedString";
import { isString } from "./isString";

/**
 *
 * @example isNumeric(1) => true
 * @example isNumeric('1') => true
 * @example isNumeric('1.1') => true
 * @example isNumeric('1.1.1') => false
 */
export const isNumeric = (arg: number | string): boolean => {
  if (isNumber(arg)) return true;

  if (!isString(arg) || isSpacedString(arg)) return false;

  return !isNaN(parseFloat(arg));
};
