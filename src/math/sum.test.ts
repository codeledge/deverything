import { describe, expect, test } from "@jest/globals";
import { sum, sumBy } from "./sum";

describe("sum", () => {
  test("simple", async () => {
    expect(sum([1, 2])).toBe(3);
  });
});

describe("sumBy", () => {
  test("simple", async () => {
    expect(
      sumBy([{ a: 1 }, { a: 2 }], (item) => {
        return item.a;
      })
    ).toBe(3);
  });
  test("string", async () => {
    expect(sumBy([{ a: 1 }, { a: 2 }], "a")).toBe(3);
  });
  test("complex", async () => {
    expect(
      sumBy([{ a: 1 }, { b: { a: 2 } }], (item) => {
        return item.a || item.b?.a;
      })
    ).toBe(3);
  });
});
