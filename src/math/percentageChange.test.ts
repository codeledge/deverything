import { describe, expect, test } from "@jest/globals";
import { percentageChange } from "./percentageChange";

describe("percentageChange", () => {
  test("simple", async () => {
    expect(
      percentageChange({
        current: 10,
        previous: 12,
      })
    ).toBe(-0.1667);
    expect(
      percentageChange({
        current: 12,
        previous: 10,
      })
    ).toBe(0.2);
    expect(
      percentageChange({
        current: 0,
        previous: 12,
      })
    ).toBe(0);
    expect(
      percentageChange({
        current: 0,
        previous: 0,
      })
    ).toBe(0);
    expect(
      percentageChange({
        current: 99,
        previous: 0,
      })
    ).toBe(0);
  });
});
