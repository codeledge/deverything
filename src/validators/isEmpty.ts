import { Maybe } from "../types";
import { isArray } from "./isArray";
import { isObject } from "./isObject";

export const isEmpty = (value?: Maybe<any>) => {
  if (isObject(value)) return Object.keys(value).length === 0;
  if (isArray(value)) return value.length === 0;

  return value === undefined || value === null || value === "";
};
