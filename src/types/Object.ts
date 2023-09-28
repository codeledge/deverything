export type ObjectValue<T> = T[keyof T];
export type ObjectValues<T> = ObjectValue<T>[];
export type ObjectKey<T> = keyof T;
export type ObjectKeys<T> = ObjectKey<T>[];
