import { isString } from "./isString";

/**
 * Whether `arg` looks like an email address: one `@`, no whitespace, and a
 * domain of two or more non-empty dot-separated labels. The whole string must
 * match, not just a part of it. Domain labels exclude `.`, so each dot can only
 * be matched one way and the check stays linear on hostile input.
 *
 * @example isEmail("user@example.com") // true
 * @example isEmail("hello user@example.com") // false
 */
export const isEmail = (arg: unknown): arg is string =>
  isString(arg) && /^[^\s@]+@(?:[^\s@.]+\.)+[^\s@.]+$/.test(arg);
