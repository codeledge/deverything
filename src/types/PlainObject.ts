export type PlainObject = Record<string | symbol, any> & { length?: never }; // Excludes arrays
