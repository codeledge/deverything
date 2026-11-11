import { isString } from "./isString";

/**
 * Whether `arg` looks like an email address: one `@`, no whitespace, and a dot
 * in the domain. The whole string must match, not just a part of it.
 *
 * @example isEmail("user@example.com") // true
 * @example isEmail("hello user@example.com") // false
 */
export const isEmail = (arg: unknown): arg is string =>
  isString(arg) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(arg);
