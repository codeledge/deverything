export type Serialized<T> = T extends Date
  ? string
  : T extends Array<infer R>
    ? Array<Serialized<R>>
    : T extends object
      ? { [K in keyof T]: Serialized<T[K]> }
      : T;
