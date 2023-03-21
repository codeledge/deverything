import { randomArrayItem } from "./randomArrayItem";

export const randomEnumValue = (enumObject: any) => {
  let values: any[] = [];

  Object.values(enumObject).forEach((value: any) => {
    if (value in enumObject && !values.includes(value))
      values.push(enumObject[value]);
  });

  console.log(values);
  return randomArrayItem(values);
};
