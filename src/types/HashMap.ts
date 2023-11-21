// I don't like the Dict keyword, but it's a possibility...
export type HashMapKey = string | number | symbol;
export type HashMap<T> = Record<HashMapKey, T>;
export type NumberMap = Record<HashMapKey, number>;
export type StringMap = Record<HashMapKey, string>;
export type BoolMap = Record<HashMapKey, boolean>;
export type TrueMap = Record<HashMapKey, true>;
