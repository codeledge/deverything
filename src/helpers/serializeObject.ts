import { PlainObject } from "../types";

/**
 * Serialize plain object to a deterministic string,
 * for nested objects use [json-stable-stringify](https://www.npmjs.com/package/json-stable-stringify)
 *
 * @example
 * serializeObject({ b: 1, a: 2 }) // '{"a":1,"b":2}'
 */
export const serializeObject = <T extends PlainObject>(obj: T) => {
  return JSON.stringify(obj, Object.keys(obj).sort());
};
