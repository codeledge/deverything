export type Key = string | number | symbol;
export type ObjectKey<T> = keyof T;
export type ObjectKeys<T> = ObjectKey<T>[];
export type ObjectValue<T> = T[keyof T];
export type ObjectValues<T> = ObjectValue<T>[];
export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
export type ObjectEntries<T> = ObjectEntry<T>[];
