import { PlainObject } from "../types";
import { Key } from "../types/Object";

export const isKey = <T extends PlainObject>(
  key: Key, // cannot use PlainKey here because it does not include symbol (keyof T does)
  obj: T
): key is keyof T =>
  obj.hasOwnProperty(key) && // makes sure the prop is not in the prototype chain
  obj.propertyIsEnumerable(key); // makes sure the prop is not a getter/setter
