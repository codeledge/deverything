import { describe, expect, test } from "@jest/globals";
import { arrayDiff } from "./arrayDiff";

describe("arrayDiff", () => {
  test("no arg", async () => {
    expect(arrayDiff([], [])).toStrictEqual([]);
  });

  test("args", async () => {
    expect(arrayDiff([1], [2])).toStrictEqual([1, 2]);
    expect(arrayDiff([1, 1], [1, 2, 2, 2])).toStrictEqual([2]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toStrictEqual([3]);
  });
});
