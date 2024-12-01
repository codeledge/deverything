/**
 * Makes all keys in required and removes undefined and null from the value types.
 * @example
 * type Example = {
 *  a: string;
 *  b: string | undefined;
 *  c?: string;
 *  d?: number | null;
 * };
 * type Result = DefinedKeys<Example>;
 * {
 *  a: string,
 *  b: string,
 *  c: string,
 *  d: number
 * }
 */
export type DefinedKeys<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};
