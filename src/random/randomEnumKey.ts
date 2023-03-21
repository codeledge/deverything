import { isNumeric } from "../validators/isNumeric";
import { randomArrayItem } from "./randomArrayItem";

export const randomEnumKey = (enumObject: any) => {
  return randomArrayItem(
    Object.keys(enumObject).filter((key) => !isNumeric(key)) // key cannot be a number
  );
};
