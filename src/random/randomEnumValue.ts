import { isNumeric } from "../validators/isNumeric";
import { randomArrayItem } from "./randomArrayItem";

export const randomEnumValue = (enumObject: any) => {
  return randomArrayItem(
    Object.keys(enumObject).filter((key) => !isNumeric(key))
  );
};
