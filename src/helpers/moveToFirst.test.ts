import { describe, expect, test } from "@jest/globals";
import { moveToFirst } from "./moveToFirst";

describe("moveToFirst", () => {
  test("no arg", async () => {
    expect(moveToFirst([], () => true)).toStrictEqual([]);
  });

  test("args", async () => {
    expect(moveToFirst([0], () => true)).toStrictEqual([0]);
    expect(moveToFirst([0, 1, 2, 3], (item) => item === 1)).toStrictEqual([
      1, 0, 2, 3,
    ]);
  });
});
