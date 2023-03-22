import { randomArrayItem } from "./randomArrayItem";

export type EnumValue = string | number;

export const randomEnumValue = (
  enumObject: Record<string, EnumValue>
): EnumValue => {
  let values: EnumValue[] = [];

  Object.values(enumObject).forEach((value) => {
    if (value in enumObject && !values.includes(value))
      values.push(enumObject[value]);
  });

  return randomArrayItem(values);
};
