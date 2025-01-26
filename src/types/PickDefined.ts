import { Defined } from "./Defined";

/**
 * Makes picked keys required and defined.
 * @example
 * type Example = {
 *  a: string;
 *  b: string | undefined;
 *  c?: string;
 *  d?: number | null;
 * };
 * type Result = PickDefined<Example, "a" | "b" | "d">;
 * {
 *  a: string;
 *  b: string | undefined;
 *  d: number | null;
 * }
 */
export type PickDefined<T, K extends keyof T> = Pick<Defined<T>, K>;

// Test
// type Example = {
//   a: string;
//   b: string | undefined; // undefined not optional
//   c?: string; // optional
//   d?: number | null; // null and optional
//   e: never;
// };

// type Result = PickDefined<Example, "a" | "b" | "c" | "d" | "e">;
