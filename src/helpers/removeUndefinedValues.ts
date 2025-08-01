import { PlainObject } from "../types/Object";

export const removeUndefinedValues = (obj: PlainObject) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined)
  );
