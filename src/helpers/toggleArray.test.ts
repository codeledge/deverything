import { describe, expect, test } from "@jest/globals";
import { toggleArray } from "./toggleArray";

describe("toggleArray", () => {
  test("array", async () => {
    expect(toggleArray([0], 0)).toStrictEqual([]);
    expect(toggleArray([0], 1)).toStrictEqual([0, 1]);
    expect(toggleArray([0, 1, "1"], "1")).toStrictEqual([0, 1]);
    expect(toggleArray([0, 1], null)).toStrictEqual([0, 1, null]);
    expect(toggleArray([0, 1, null], null)).toStrictEqual([0, 1]);
    expect(toggleArray([0, 1, undefined], undefined)).toStrictEqual([0, 1]);
    expect(toggleArray(["1", 0, "1"], "1")).toStrictEqual([0]);
  });
});
