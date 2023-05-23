import { enumKeys } from "../helpers/enumKeys";
import { ObjectKey } from "../types/Object";
import { randomArrayItem } from "./randomArrayItem";

export const randomEnumKey = <T extends object>(arg: T): ObjectKey<T> => {
  const keys = enumKeys(arg);

  return randomArrayItem(keys);
};
