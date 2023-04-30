import { describe, expect, test } from "@jest/globals";
import { getKeys } from "./getKeys";

describe("getKeys", () => {
  test("{}", async () => {
    expect(getKeys(new Date())).toStrictEqual([]);
    expect(getKeys(Date)).toStrictEqual([]);
    expect(getKeys(Function)).toStrictEqual([]);
    expect(getKeys(new Function())).toStrictEqual([]);
    expect(getKeys(new Object())).toStrictEqual([]);
    expect(getKeys(new Array())).toStrictEqual([]);
  });

  test("keys", async () => {
    expect(getKeys({ a: 1, b: 2 })).toStrictEqual(["a", "b"]);
    expect(getKeys({ [Symbol.for("1")]: 1, b: 2 })).toStrictEqual([
      "b",
      Symbol.for("1"),
    ]);
  });
});
