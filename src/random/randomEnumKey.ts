import { isNumeric } from "../validators/isNumeric";
import { randomArrayItem } from "./randomArrayItem";

export const randomEnumKey = (
  enumObject: Record<string, string | number>
): string => {
  return randomArrayItem(
    Object.keys(enumObject).filter((key) => !isNumeric(key)) // key cannot be a number
  );
};
