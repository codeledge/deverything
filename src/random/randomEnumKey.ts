import { isNumeric } from "../validators/isNumeric";
import { randomArrayItem } from "./randomArrayItem";

export const randomEnumKey = <T extends object>(enumObject: T): keyof T => {
  return randomArrayItem(
    Object.keys(enumObject).filter((key) => !isNumeric(key)) // key cannot be a number
  ) as keyof T;
};
