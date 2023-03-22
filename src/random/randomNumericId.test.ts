import { test, describe, expect } from "@jest/globals";
import { randomNumericId } from "./randomNumericId";

describe("randomNumericId", () => {
  test(`generates multiple valid ids`, async () => {
    expect(randomNumericId()).toBeGreaterThan(0);
    expect(randomNumericId()).toBeTruthy();
  });
});
