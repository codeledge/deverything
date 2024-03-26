import { describe, expect, test } from "@jest/globals";
import { merge } from "./merge";

describe("merge", () => {
  test("object", async () => {
    expect(merge({}, {})).toStrictEqual({});
    expect(merge({}, { a: 1 })).toStrictEqual({ a: 1 });
    expect(merge({ a: 0 }, { a: 1 })).toStrictEqual({ a: 1 });
    expect(merge({ a: 0 }, { a: { b: 1 } })).toStrictEqual({ a: { b: 1 } });
    expect(merge({ a: 0 }, { a: [] })).toStrictEqual({ a: [] });
    expect(merge({ a: {} }, { a: [] })).toStrictEqual({ a: [] });
    expect(merge({ a: [0] }, { a: [1] })).toStrictEqual({ a: [1] });
    expect(merge({ a: { c: 1 } }, { a: { b: 1 } })).toStrictEqual({
      a: { b: 1, c: 1 },
    });
    expect(merge({ a: { c: 1 }, d: 2 }, { a: { b: 1 } })).toStrictEqual({
      a: { b: 1, c: 1 },
      d: 2,
    });
  });
});
