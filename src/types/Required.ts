export type Required<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type PickRequired<T, K extends keyof T> = Required<Pick<T, K>>;

export type Forbid<T, K extends keyof any> = {
  [P in keyof T]: P extends K ? never : T[P];
};
