import { describe, expect, test } from "vitest";
import { objectDiff } from "./objectDiff";

describe("objectDiff", () => {
  test("no arg", async () => {
    expect(objectDiff({}, {})).toStrictEqual({});
  });

  test("args", async () => {
    const date = new Date();
    expect(
      objectDiff({ a: [() => {}, date] }, { a: [() => {}, date] })
    ).toStrictEqual({});
    expect(objectDiff({ a: () => {} }, { a: () => {} })).toStrictEqual({});
    expect(
      objectDiff(
        {
          a: () => {
            return 1;
          },
        },
        {
          a: () => {
            return 1;
          },
        }
      )
    ).toStrictEqual({});
    expect(objectDiff({ a: undefined }, { a: null })).toStrictEqual({
      a: { from: undefined, to: null },
    });
    expect(objectDiff({ a: 1 }, { a: 2 })).toStrictEqual({
      a: { from: 1, to: 2 },
    });
  });
});
