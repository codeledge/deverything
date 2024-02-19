import { PlainObject } from "../types";

export const isObject = <T>(arg?: any): arg is PlainObject<T> =>
  Object.prototype.toString.call(arg) === "[object Object]";
