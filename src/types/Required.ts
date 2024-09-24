export type Required<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type PickRequired<T, K extends keyof T> = Required<Pick<T, K>>;
