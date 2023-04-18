import { randomArrayItem } from "./randomArrayItem";

export const randomEnumValue = <T extends object>(
  enumObject: T
): T[keyof T] => {
  let values: T[keyof T][] = [];

  Object.values(enumObject).forEach((value: T[keyof T]) => {
    if (value in enumObject && !values.includes(value))
      values.push(enumObject[value]);
  });

  return randomArrayItem(values);
};
