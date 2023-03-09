import { describe, expect, test } from "@jest/globals";
import { first } from "./first";

describe("first", () => {
  test("no arg", async () => {
    expect(first()).toBeUndefined();
  });

  test("args", async () => {
    expect(first([])).toBe(undefined);
    expect(first([0])).toBe(0);
    const fn = () => {};
    expect(first([fn, 1])).toEqual(fn);
  });
});
