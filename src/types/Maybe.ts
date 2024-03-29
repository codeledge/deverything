export type Maybe<T> = T | null | undefined;
export type MaybePromise<T> = Maybe<Promise<T>>;
export type MaybePromiseOrValue<T> = MaybePromise<T> | T;
export type MaybePromiseOrValueArray<T> = MaybePromiseOrValue<T>[];
