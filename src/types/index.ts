export type Maybe<T> = T | null | undefined;
export type Coords = {
  lat: number;
  lng: number;
};

export type MaybePromise<T> = Maybe<Promise<T>>;
export type MaybePromiseOrValue<T> = MaybePromise<T> | T;
export type MaybePromiseOrValueArray<T> = MaybePromiseOrValue<T>[];

export type DateLike = Date | string | number;

export type NonUndefined<T> = T extends undefined ? never : T;
