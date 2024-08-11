import { describe, expect, test } from "@jest/globals";
import { percentageChange } from "./percentageChange";

describe("percentageChange", () => {
  test("simple", async () => {
    expect(percentageChange(-0.1, 0.2)).toBe(0);
    expect(percentageChange(0.2, 0.1)).toBe(-0.5);
    expect(percentageChange(0.1, 0.2)).toBe(1);
    expect(percentageChange(0.3, 0.333)).toBe(0.11);
    expect(percentageChange(0, 0.12)).toBe(1);
    expect(percentageChange(0, 0)).toBe(0);
    expect(percentageChange(0.99, 0)).toBe(-1);
  });
});
