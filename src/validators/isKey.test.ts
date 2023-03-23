import { describe, expect, test } from "@jest/globals";
import { isKey } from "./isKey";

describe("isKey", () => {
  test("mixed", async () => {
    expect(isKey("bar", { bar: true })).toBeTruthy();
    expect(isKey("baz", { bar: true })).toBeFalsy();
    expect(isKey("message", new Error())).toBeFalsy();
    expect(isKey("length", new Date())).toBeFalsy();
    expect(isKey("length", new Array())).toBeFalsy();
    expect(isKey("__proto__", {})).toBeFalsy();
    expect(isKey("size", new Set())).toBeFalsy();
  });
});
