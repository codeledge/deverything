import { Key } from "./Object";

// I don't like the Dict keyword, but it's a possibility...
export type HashMap<T> = Record<Key, T>;
export type NumberMap = Record<Key, number>;
export type StringMap = Record<Key, string>;
export type BoolMap = Record<Key, boolean>;
export type TrueMap = Record<Key, true>;
