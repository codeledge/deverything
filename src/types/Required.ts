export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type PickRequired<T, K extends keyof T> = Required<Pick<T, K>>;
