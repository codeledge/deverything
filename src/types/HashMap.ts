import { PlainKey } from "./Object";

// I don't like the Dict keyword, but it's a possibility...
export type HashMap<T> = Record<PlainKey, T>;
export type NumberMap = Record<PlainKey, number>;
export type StringMap = Record<PlainKey, string>;
export type BoolMap = Record<PlainKey, boolean>;
export type TrueMap = Record<PlainKey, true>;
