import { describe, expect, expectTypeOf, test } from "vitest";
import { isEmail } from "./isEmail";

describe("isEmail", () => {
  test("accepts an address", () => {
    expect(isEmail("user@example.com")).toBe(true);
    expect(isEmail("first.last+tag@mail.example.co.uk")).toBe(true);
  });

  test("rejects a string that only contains an address", () => {
    expect(isEmail("hello user@example.com")).toBe(false);
    expect(isEmail("user@example.com bye")).toBe(false);
    expect(isEmail("user@example.com\n")).toBe(false);
  });

  test("rejects more than one @, or none", () => {
    expect(isEmail("a@b@example.com")).toBe(false);
    expect(isEmail("example.com")).toBe(false);
  });

  test("rejects a domain without a dot, and non-strings", () => {
    expect(isEmail("user@localhost")).toBe(false);
    expect(isEmail(1)).toBe(false);
  });

  test("narrows an unknown value to string", () => {
    const value: unknown = "user@example.com";
    if (isEmail(value)) expectTypeOf(value).toEqualTypeOf<string>();
  });
});
