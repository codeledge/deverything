import { ObjectValue, PlainObject } from "../types";
import { randomArrayItem } from "./randomArrayItem";

export const randomObjectValue = <T extends PlainObject>(
  object: T
): ObjectValue<T> => {
  return randomArrayItem(Object.values(object));
};
