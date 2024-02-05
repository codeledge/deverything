import { ObjectValue, PlainObject } from "../types";

export const firstValue = <T extends PlainObject>(arg: T): ObjectValue<T> =>
  Object.values(arg)[0];
