import { describe, expect, test } from "vitest";
import { setObjectPath } from "./setObjectPath";

describe("setObjectPath", () => {
  test("no path", () => {
    const obj = { a: 1, b: 2, c: 3 };
    setObjectPath(obj, "b", 4);
    expect(obj).toEqual({ a: 1, b: 4, c: 3 });

    let obj2 = {};
    setObjectPath(obj2, "b", {});
    expect(obj2).toEqual({ b: {} });
  });
  test("overrides array", () => {
    const obj = { a: 1, b: [], c: 3 };
    setObjectPath(obj, "b", [1, 12]);
    expect(obj).toEqual({ a: 1, b: [1, 12], c: 3 });
  });

  test("overrides different type", () => {
    const obj = { a: 1, b: [], c: new Date() };
    setObjectPath(obj, "c.g", { lol: 1 });
    expect(obj).toEqual({
      a: 1,
      b: [],
      c: {
        g: { lol: 1 },
      },
    });
  });
  test("creates new nested", () => {
    const obj = { a: 1 };
    setObjectPath(obj, "c.g", { lol: 1 });
    expect(obj).toEqual({
      a: 1,
      c: {
        g: { lol: 1 },
      },
    });
  });

  test("merges nested", () => {
    const obj = { a: { b: { c: 1 } } };
    setObjectPath(obj, "a.b.g", { lol: 1 });
    expect(obj).toEqual({
      a: {
        b: {
          c: 1,
          g: { lol: 1 },
        },
      },
    });
  });
});
