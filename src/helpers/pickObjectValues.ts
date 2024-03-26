import { ObjectValues, PlainObject } from "../types/Object";

export const pickObjectValues = <T extends PlainObject>(
  obj: T,
  values: ObjectValues<T>
): Partial<T> => {
  const ret: Partial<T> = {};
  for (const key in obj) {
    if (values.includes(obj[key])) ret[key] = obj[key];
  }
  return ret;
};
