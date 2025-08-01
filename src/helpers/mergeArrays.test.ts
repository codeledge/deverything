import { describe, expect, test } from "vitest";
import { mergeArrays } from "./mergeArrays";

describe("mergeArrays", () => {
  test("array", async () => {
    expect(mergeArrays([], [])).toStrictEqual([]);
    expect(mergeArrays([1, 2, 3], [1])).toStrictEqual([1, 2, 3]);
    expect(mergeArrays([1, 2, 3, 3], [1, 3])).toStrictEqual([1, 2, 3, 3]);
    expect(mergeArrays([1, 2, 3, 3], [1, 3, 4, 4])).toStrictEqual([
      1, 2, 3, 3, 4, 4,
    ]);
  });
});
