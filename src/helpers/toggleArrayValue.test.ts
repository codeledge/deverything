import { describe, expect, test } from "vitest";
import { toggleArrayValue } from "./toggleArrayValue";

describe("toggleArrayValue", () => {
  test("array arg", async () => {
    expect(toggleArrayValue([0], 0)).toStrictEqual([]);
    expect(toggleArrayValue([0], 1)).toStrictEqual([0, 1]);
    expect(toggleArrayValue([0, 1, "1"], "1")).toStrictEqual([0, 1]);
    expect(toggleArrayValue([0, 1], null)).toStrictEqual([0, 1, null]);
    expect(toggleArrayValue([0, 1, null], null)).toStrictEqual([0, 1]);
    expect(toggleArrayValue([0, 1, undefined], undefined)).toStrictEqual([
      0, 1,
    ]);
    expect(toggleArrayValue(["1", 0, "1"], "1")).toStrictEqual([0]);
  });
});
