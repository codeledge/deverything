import { describe, expect, expectTypeOf, test } from "vitest";
import { omit } from "./omit";

describe("omit", () => {
  test("drops the given keys and keeps the rest", () => {
    const result = omit({ a: 1, b: "x", c: true }, ["b"]);
    expect(result).toStrictEqual({ a: 1, c: true });
    expectTypeOf(result).toEqualTypeOf<
      Omit<{ a: number; b: string; c: boolean }, "b">
    >();
  });

  test("takes a readonly key list", () => {
    const keys = ["a", "c"] as const;
    expect(omit({ a: 1, b: 2, c: 3 }, keys)).toStrictEqual({ b: 2 });
  });
});
