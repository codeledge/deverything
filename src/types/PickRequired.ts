/**
 * Makes picked keys required. (does not remove undefined and null from the value types)
 * @example
 * type Example = {
 *  a: string;
 *  b: string | undefined;
 *  c?: string;
 *  d?: number | null;
 * };
 * type Result = PickRequired<Example, "a" | "b" | "d">;
 * {
 *  a: string;
 *  b: string | undefined;
 *  d: number | null;
 * }
 */
export type PickRequired<T, K extends keyof T> = Pick<Required<T>, K>;

// Test
// type Example = {
//   a: string;
//   b: string | undefined;
//   c?: string;
//   d?: number | null;
//   e: never;
// };

// type Result = PickRequired<Example, "a" | "b" | "c" | "d" | "e">;
