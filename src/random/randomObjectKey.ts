import { ObjectKey, PlainObject } from "../types";
import { randomArrayItem } from "./randomArrayItem";

export const randomObjectKey = <T extends PlainObject>(
  object: T
): ObjectKey<T> => {
  return randomArrayItem(Object.keys(object));
};
