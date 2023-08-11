import { PlainObject } from "../types";

/**
 * Serialize an object to a string, sorting the keys
 *
 * @example
 * serializeObject({ b: 1, a: 2 }) // '{"a":1,"b":2}'
 */

export const serializeObject = (obj: PlainObject) => {
  return JSON.stringify(obj, Object.keys(obj).sort());
};
