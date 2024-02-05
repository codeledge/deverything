import { describe, expect, test } from "@jest/globals";
import { percentageChange } from "./percentageChange";

describe("percentageChange", () => {
  test("simple", async () => {
    expect(
      percentageChange({
        current: 10,
        previous: 12,
      })
    ).toBe(-16.67);
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
