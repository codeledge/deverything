import { PlainObject } from "../types";

/**
 * Serialize shallow object to a deterministic string,
 * for nested objects use [json-stable-stringify](https://www.npmjs.com/package/json-stable-stringify)
 *
 * @example
 * serialize({ b: 1, a: 2 }) // '{"a":1,"b":2}'
 */
export const serialize = <T extends PlainObject>(obj: T) => {
  const allKeys = new Set<string>();
  JSON.stringify(obj, (key, value) => (allKeys.add(key), value));
  return JSON.stringify(obj, Array.from(allKeys).sort());
};
