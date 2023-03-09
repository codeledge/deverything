import { describe, expect, test } from "@jest/globals";
import { moveToLast } from "./moveToLast";

describe("moveToLast", () => {
  test("no arg", async () => {
    expect(moveToLast([], () => true)).toStrictEqual([]);
  });

  test("args", async () => {
    expect(moveToLast([0], () => true)).toStrictEqual([0]);
    expect(moveToLast([0, 1, 2, 3], (item) => item === 1)).toStrictEqual([
      0, 2, 3, 1,
    ]);
  });
});
