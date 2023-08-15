import { PlainObject } from "../types";
import { isFunction } from "../validators";

export type PropertyAccessor<T> = keyof T | ((item: T) => any);

export const getProp = <T extends PlainObject>(
  obj: T,
  propertyAccessor: PropertyAccessor<T>
) => {
  if (isFunction(propertyAccessor)) {
    return propertyAccessor(obj);
  }

  return obj[propertyAccessor];
};
