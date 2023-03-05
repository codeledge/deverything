import { describe, expect, test } from "@jest/globals";
import { randomInt } from "./randomInt";

describe("randomInt", () => {
  test("no args", async () => {
    expect(randomInt()).toBeGreaterThanOrEqual(Number.MIN_VALUE);
    expect(randomInt()).toBeLessThanOrEqual(Number.MAX_VALUE);
  });

  test("args", async () => {
    expect(randomInt(12, 20)).toBeGreaterThanOrEqual(12);
    expect(randomInt(12, 12)).toBeLessThanOrEqual(12);
    expect(randomInt(11, 12)).toBeLessThanOrEqual(13);
  });
});
