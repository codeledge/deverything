import { describe, expect, test } from "@jest/globals";
import { last } from "./last";

describe("last", () => {
  test("args", async () => {
    expect(last([])).toBe(undefined);
    expect(last([0])).toBe(0);
    expect(last([false, true])).toBe(true);
    const fn = () => {};
    expect(last([fn, 1])).toEqual(1);
  });
});
