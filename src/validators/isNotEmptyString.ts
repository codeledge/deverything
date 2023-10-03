import { isString } from "./isString";

export const isNotEmptyString = (arg: any): boolean => {
  return isString(arg) && arg.trim().length > 0;
};
