import { ObjectKeys, PlainObject } from "../types";

export const getKeys = <T extends PlainObject>(obj: T): ObjectKeys<T> => {
  return Object.keys(obj).concat(getEnumerableOwnPropertySymbols(obj));
};

// Object.keys does not return enumerable symbols
export const getEnumerableOwnPropertySymbols = (obj: object): any[] => {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(obj).filter(function (symbol) {
        return Object.propertyIsEnumerable.call(obj, symbol);
      })
    : [];
};
