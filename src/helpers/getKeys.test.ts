import { describe, expect, test } from "@jest/globals";
import { getKeys } from "./getKeys";

describe("getKeys", () => {
  test("constructors", async () => {
    expect(getKeys(new Date())).toStrictEqual([]);
    expect(getKeys(new Object())).toStrictEqual([]);
  });

  test("objects", async () => {
    expect(getKeys({ 1: 1, b: 2 })).toStrictEqual(["1", "b"]);
    expect(getKeys({ [Symbol.for("1")]: 1, b: 2 })).toStrictEqual([
      "b",
      Symbol.for("1"),
    ]);
  });
});
