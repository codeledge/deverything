import { describe, expect, test } from "@jest/globals";
import { moveToIndex } from "./moveToIndex";

describe("moveToIndex", () => {
  test("no arg", () => {
    expect(moveToIndex([], 0, 0)).toStrictEqual([]);
  });

  test("invalid index", () => {
    expect(moveToIndex([1, 2, 3], 4, 0)).toStrictEqual([1, 2, 3]);
  });

  test("args", () => {
    expect(moveToIndex([1, 2, 3, 4, 5], 2, 0)).toStrictEqual([3, 1, 2, 4, 5]);
    expect(moveToIndex([1, 2], 1, 0)).toStrictEqual([2, 1]);
    expect(moveToIndex(Array.from("deveryhingt"), 10, 6).join("")).toBe("deverything");
  });
});
