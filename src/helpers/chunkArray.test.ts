import { describe, expect, test } from "vitest";
import { chunkArray } from "./chunkArray";

describe("chunkArray", () => {
  test("splits into chunks of size, the last one shorter", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2], 5)).toStrictEqual([[1, 2]]);
    expect(chunkArray([], 3)).toStrictEqual([]);
  });

  test("takes a readonly array", () => {
    const items: readonly number[] = [1, 2, 3];
    expect(chunkArray(items, 2)).toStrictEqual([[1, 2], [3]]);
  });

  test("throws on a size that is not a positive integer", () => {
    for (const size of [0, -1, 1.5, NaN, Infinity]) {
      expect(() => chunkArray([1, 2, 3], size)).toThrow(RangeError);
    }
  });
});
