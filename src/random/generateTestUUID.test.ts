import { test, describe, expect } from "vitest";
import { generateTestUUID, randomUUID } from "./generateTestUUID";

describe("generateTestUUID", () => {
  test(`generates multiple valid ids`, async () => {
    expect(generateTestUUID()).toBeTruthy();
    expect(generateTestUUID()).not.toBe(generateTestUUID());
  });

  test(`keeps randomUUID as a deprecated alias`, () => {
    expect(randomUUID).toBe(generateTestUUID);
  });
});
