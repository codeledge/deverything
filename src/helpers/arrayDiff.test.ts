import { describe, expect, test } from "vitest";
import { arrayDiff } from "./arrayDiff";

describe("arrayDiff", () => {
  test("no arg", async () => {
    expect(arrayDiff([], [])).toStrictEqual([]);
  });

  test("args", async () => {
    expect(arrayDiff([1], [2])).toStrictEqual([1, 2]);
    expect(arrayDiff([true, "a"], [false, "b"])).toStrictEqual([
      true,
      "a",
      false,
      "b",
    ]);
    // repeated on both
    expect(arrayDiff([1, 1], [1, 2, 2, 2])).toStrictEqual([2]);
    expect(arrayDiff([1, 1, 0, 0], [1, 2, 2, 2])).toStrictEqual([0, 2]);
    // in a not b
    expect(arrayDiff([1, 2, 3], [1, 2])).toStrictEqual([3]);
    // in b not a
    expect(arrayDiff([1, 2], [1, 2, 3])).toStrictEqual([3]);
  });
});
