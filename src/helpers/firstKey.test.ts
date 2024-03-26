import { describe, expect, test } from "@jest/globals";
import { firstKey } from "./firstKey";

describe("firstKey", () => {
  test("no arg", async () => {
    expect(firstKey({})).toBeUndefined();
  });

  test("args", async () => {
    expect(firstKey(new Date())).toBe(undefined);
    expect(firstKey({ "1": 1 })).toBe("1");
    expect(firstKey({ [Symbol()]: 1, 2: 2 })).toBe("2");
    expect(firstKey({ 1: 1, 2: 2 })).toBe("1");
  });
});
