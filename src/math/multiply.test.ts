import { describe, expect, test } from "vitest";
import { multiply } from "./multiply";

describe("multiply", () => {
  test("simple", async () => {
    expect(multiply([1, 2])).toBe(2);
    expect(multiply([1, 0])).toBe(0);
    expect(multiply([0.5, 0.5])).toBe(0.25);
  });
});
