import { describe, expect, test } from "vitest";
import { first } from "./first";

describe("first", () => {
  test("args", async () => {
    expect(first([])).toBe(undefined);
    expect(first([0])).toBe(0);
    const fn = () => {};
    expect(first([fn, 1])).toEqual(fn);
  });
});
