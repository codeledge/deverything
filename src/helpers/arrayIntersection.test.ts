import { describe, expect, test } from "@jest/globals";
import { arrayIntersection } from "./arrayIntersection";

describe("arrayIntersection", () => {
  test("no arg", async () => {
    expect(arrayIntersection([], [])).toStrictEqual([]);
    expect(arrayIntersection([true], [false])).toStrictEqual([]);
    expect(arrayIntersection([() => {}], [() => {}])).toStrictEqual([]);
  });

  test("args", async () => {
    expect(arrayIntersection([1], [2])).toStrictEqual([]);
    expect(arrayIntersection([1, 1], [1, 2])).toStrictEqual([1]);
    expect(arrayIntersection([1, 1], [1, 2, 2])).toStrictEqual([1]);
    expect(arrayIntersection([1, 2, 3], [1, 2])).toStrictEqual([1, 2]);
    expect(arrayIntersection([1, 2, 3], [2, 3, 4])).toStrictEqual([2, 3]);
  });
});
