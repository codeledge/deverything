import { describe, expect, test } from "vitest";
import { isKey } from "./isKey";

describe("isKey", () => {
  test("mixed", async () => {
    expect(isKey("bar", { bar: true })).toBeTruthy();
    expect(
      isKey("baz", {
        bar: true,
        [Symbol()]: 1,
        [Symbol("baz")]: 1,
        [Symbol.for("baz")]: 1,
      })
    ).toBeFalsy();
    expect(isKey("message", new Error())).toBeFalsy();
    expect(isKey("length", new Date())).toBeFalsy();
    expect(isKey("__proto__", {})).toBeFalsy();
    expect(isKey("size", new Set())).toBeFalsy();
  });
});
