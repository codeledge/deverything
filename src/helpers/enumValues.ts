import { ObjectValue, ObjectKey, ObjectValues } from "../types/Object";
import { isKey } from "../validators/isKey";

export const enumValues = <T extends object>(
  enumObject: T
): ObjectValues<T> => {
  let values: ObjectValues<T> = [];

  Object.values(enumObject).forEach((value) => {
    // types are tricky here because the value is used also to check if exists as a key
    if (isKey(value, enumObject) && !values.includes(value as ObjectValue<T>))
      values.push(enumObject[value as ObjectKey<T>]);
  });

  return values;
};
