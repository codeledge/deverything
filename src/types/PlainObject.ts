import { Key } from "./Object";

/**
 * A plain object is an object that is not an array, does not have a length property, and is not a function.
 * Would have been nice to call it just Object, but that's already taken by the built-in type.
 */
export type PlainObject<T = any> = Record<Key, T> & {
  length?: never;
}; // Excludes arrays
