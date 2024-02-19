import { PlainObject } from "../types";

/**
 * TODO: rename to allKeys
 * @deprecated use Object.keys instead unless you need to include symbols, but the function will be renamed to allKeys
 */
export const getKeys = <T extends PlainObject>(obj: T): (string | symbol)[] => {
  return (Object.keys(obj) as (string | symbol)[]).concat(
    getEnumerableOwnPropertySymbols(obj)
  );
};

// Object.keys does not return enumerable symbols
export const getEnumerableOwnPropertySymbols = (obj: object): symbol[] => {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(obj).filter(function (symbol) {
        return Object.propertyIsEnumerable.call(obj, symbol);
      })
    : [];
};
