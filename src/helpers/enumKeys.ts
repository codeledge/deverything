import { ObjectKeys } from "../types/Object";
import { isNumeric } from "../validators/isNumeric";

export const enumKeys = <T extends object>(arg: T): ObjectKeys<T> => {
  return Object.keys(arg).filter(
    (key) => !isNumeric(key) // enum key cannot be a number
  ) as ObjectKeys<T>; // Type 'string' is not assignable to type 'keyof T'.
};
