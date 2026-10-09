import { test, describe, expect } from "vitest";
import { incrementalUUID } from "./incrementalUUID";

describe("incrementalUUID", () => {
  test(`generates multiple valid ids`, async () => {
    expect(incrementalUUID()).toBeTruthy();
    expect(incrementalUUID()).not.toBe(incrementalUUID());
  });
});
