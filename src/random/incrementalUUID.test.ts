import { test, describe, expect } from "vitest";
import { incrementalUUID, randomUUID } from "./incrementalUUID";

describe("incrementalUUID", () => {
  test(`generates multiple valid ids`, async () => {
    expect(incrementalUUID()).toBeTruthy();
    expect(incrementalUUID()).not.toBe(incrementalUUID());
  });

  test(`keeps randomUUID as a deprecated alias`, () => {
    expect(randomUUID).toBe(incrementalUUID);
  });
});
