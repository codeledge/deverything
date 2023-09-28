import { enumValues } from "../helpers/enumValues";
import { ObjectValue } from "../types/Object";
import { randomArrayItem } from "./randomArrayItem";

export const randomEnumValue = <T extends object>(arg: T): ObjectValue<T> => {
  const values = enumValues(arg);

  return randomArrayItem(values);
};
