import { describe, expect, test } from "@jest/globals";
import { max } from "./max";

describe("max", () => {
  test("simple", async () => {
    expect(max([1, 2])).toBe(2);
    expect(max([-1, -12])).toBe(-1);
    expect(max([0])).toBe(0);
    expect(max([])).toBe(0);
    expect(max([-Infinity, 0])).toBe(0);
  });
});
