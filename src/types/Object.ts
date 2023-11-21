export type ObjectKey<T> = keyof T;
export type ObjectKeys<T> = ObjectKey<T>[];
export type ObjectValue<T> = T[keyof T];
export type ObjectValues<T> = ObjectValue<T>[];
// ObjectEntry needed?
export type ObjectEntries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
