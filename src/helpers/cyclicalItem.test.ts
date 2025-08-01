import { describe, expect, test } from "vitest";
import { cyclicalItem } from "./cyclicalItem";

describe("cyclicalItem", () => {
  test("works", async () => {
    expect(cyclicalItem([], 0)).toBe(undefined);
    expect(cyclicalItem([], 1)).toBe(undefined);
  });

  test("works", async () => {
    expect(cyclicalItem([1], 0)).toBe(1);
    expect(cyclicalItem([1], 1)).toBe(1);
  });

  test("works", async () => {
    expect(cyclicalItem([1, 2, 3], 0)).toBe(1);
    expect(cyclicalItem([1, 2, 3], 2)).toBe(3);
    expect(cyclicalItem([1, 2, 3], 3)).toBe(1);
    expect(cyclicalItem([1, 2, 3], 30)).toBe(1);
  });
});
