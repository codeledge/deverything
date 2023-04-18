import { isKey } from "../validators/isKey";
import { randomArrayItem } from "./randomArrayItem";

export const randomEnumValue = <T extends object>(
  enumObject: T
): T[keyof T] => {
  let values: T[keyof T][] = [];

  Object.values(enumObject).forEach((value) => {
    // types are tricky here because the value is used also to check if exists as a key
    if (isKey(value, enumObject) && !values.includes(value as T[keyof T]))
      values.push(enumObject[value as keyof T]);
  });

  return randomArrayItem(values);
};
