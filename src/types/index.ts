export type Maybe<T> = T | null | undefined;

export type MaybePromise<T> = Maybe<Promise<T>>;
export type MaybePromiseOrValue<T> = MaybePromise<T> | T;
export type MaybePromiseOrValueArray<T> = MaybePromiseOrValue<T>[];

export type NonUndefined<T> = T extends undefined ? never : T;

export * from "./ObjectValues";
export * from "./PlainObject";
export * from "./Point";
export * from "./DateLike";
export * from "./Coords";
