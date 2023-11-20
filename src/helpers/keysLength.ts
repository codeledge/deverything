import { PlainObject } from "../types";

export const keysLength = <T extends PlainObject>(obj: T) => {
  return Object.keys(obj).length;
};
