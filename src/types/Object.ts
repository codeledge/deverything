export type Key = string | number | symbol;
export type PlainKey = string | number;
export type ObjectKey<T> = keyof T;
export type ObjectKeys<T> = ObjectKey<T>[];
export type ObjectValue<T> = T[keyof T];
export type ObjectValues<T> = ObjectValue<T>[];
export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
export type ObjectEntries<T> = ObjectEntry<T>[];

/**
 * A plain object is an object that is not an array, does not have a length property, and is not a function.
 * Would have been nice to call it just Object, but that's already taken by the built-in type.
 */
export type PlainObject<T = any> = Record<PlainKey, T> & {
  length?: never;
}; // Excludes arrays
