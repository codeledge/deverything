import { describe, expect, test } from "vitest";
import { getKeys } from "./getKeys";

describe("getKeys", () => {
  test("constructors", async () => {
    expect(getKeys(new Date())).toStrictEqual([]);
    expect(getKeys(new Object())).toStrictEqual([]);
  });

  test("objects", async () => {
    expect(getKeys({ 1: 1, b: 2 })).toStrictEqual(["1", "b"]);
  });
});
