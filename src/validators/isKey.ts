import { Key } from "../types/Object";

export const isKey = <T extends object>(key: Key, obj: T): key is keyof T =>
  obj.hasOwnProperty(key) && // makes sure the prop is not in the prototype chain
  obj.propertyIsEnumerable(key); // makes sure the prop is not a getter/setter
