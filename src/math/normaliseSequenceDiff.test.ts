import { describe, expect, test } from "@jest/globals";
import { normaliseSequenceDiff } from "./normaliseSequenceDiff";

describe("normaliseSequenceDiff", () => {
  test("simple", async () => {
    expect(normaliseSequenceDiff([])).toStrictEqual([]);
    expect(normaliseSequenceDiff([1])).toStrictEqual([0]);
    expect(normaliseSequenceDiff([2])).toStrictEqual([0]);
    expect(normaliseSequenceDiff([2], { startFrom: -1 })).toStrictEqual([-3]);
    expect(normaliseSequenceDiff([1, 2, 3])).toStrictEqual([0, 0, 0]);
    expect(normaliseSequenceDiff([1, 2, 4])).toStrictEqual([0, 0, -1]);
    expect(normaliseSequenceDiff([2, 4, 6])).toStrictEqual([0, -1, -2]);
    expect(normaliseSequenceDiff([2, 2, 6])).toStrictEqual([0, 1, -2]);
    expect(normaliseSequenceDiff([-1, 2, 6], { startFrom: 0 })).toStrictEqual([
      1, -1, -4,
    ]);
    // untidy sequence
    expect(
      normaliseSequenceDiff([-1, -10, 6, 4], { startFrom: 0 })
    ).toStrictEqual([2, 10, -3, -2]);
    expect(normaliseSequenceDiff([-1, -10, 6, 4])).toStrictEqual([
      -8, 0, -13, -12,
    ]);
  });
});
