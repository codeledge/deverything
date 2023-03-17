import { Maybe } from "../types";
import { isArray } from "./isArray";
import { isObject } from "./isObject";
import { isString } from "./isString";

export const isEmpty = (value?: Maybe<any>) => {
  if (isObject(value)) return Object.keys(value).length === 0;
  if (isArray(value)) return value.length === 0;

  return value === undefined || value === null || value === "";
};

export const isEmptyString = (arg: string) => {
  return isString(arg) && arg.trim().length === 0;
};

export const isEmptyArray = (arg: any[]) => {
  return isArray(arg) && arg.length === 0;
};

export const isEmptyObject = (arg: Object) => {
  return isObject(arg) && Object.keys(arg).length === 0;
};
