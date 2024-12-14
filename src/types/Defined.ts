/**
 * Makes all keys required and removes undefined and null from the value types.
 * @example
 * type Example = {
 *  a: string;
 *  b: string | undefined;
 *  c?: string;
 *  d?: number | null;
 * };
 * type Result = Defined<Example>;
 * {
 *  a: string,
 *  b: string,
 *  c: string,
 *  d: number
 * }
 */
export type Defined<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};
