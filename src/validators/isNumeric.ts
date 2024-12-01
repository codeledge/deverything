import { isNumber } from "./isNumber";
import { isString } from "./isString";

/**
 *
 * @example isNumeric(1) => true
 * @example isNumeric(10e8) => true
 * @example isNumeric('1') => true
 * @example isNumeric('1.1') => true
 * @example isNumeric('1.1.1') => false
 * @example isNumeric('1-1') => false
 */
export const isNumeric = (arg: number | string): boolean => {
  if (isNumber(arg)) return true;

  // safety check, no other types are allowed
  if (!isString(arg)) return false;

  return /^[+-]?((\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?|0[xX][\dA-Fa-f]+|0[bB][01]+)$/.test(
    arg
  );
};
