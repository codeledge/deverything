import { PlainObject } from "../types/PlainObject";
import { isObject } from "../validators/isObject";

/**
 * Sets a value in an object using a dot-separated path.
 *
 * @param obj The object to set the value in.
 * @param path The path to the key to set, separated by dots.
 * @param value The value to set.
 */
export const setObjectPath = (obj: PlainObject, path: string, value: any) => {
  const keys = path.split(".");

  const set = (obj: PlainObject, relPath: string[], value: any) => {
    const key = relPath[0];
    if (relPath.length === 1) {
      obj[key] = value;
      return;
    }

    // creates empty object is key does not exist, or it's not an object (overwrites)
    if (!obj[key] || !isObject(obj[key])) {
      obj[key] = {};
    }

    set(obj[key], relPath.slice(1), value);
  };

  set(obj, keys, value);
};
