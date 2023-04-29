import { describe, expect, test } from "@jest/globals";
import { arrayIntersection } from "./arrayIntersection";

describe("arrayIntersection", () => {
  test("no arg", async () => {
    expect(arrayIntersection([], [])).toStrictEqual([]);
  });

  test("args", async () => {
    expect(arrayIntersection([1], [2])).toStrictEqual([]);
    expect(arrayIntersection([1, 1], [1, 2])).toStrictEqual([1]);
    expect(arrayIntersection([1, 2, 3], [1, 2])).toStrictEqual([1, 2]);
  });
});
