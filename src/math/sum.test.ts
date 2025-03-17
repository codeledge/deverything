import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";
import { pluck } from "../helpers/pluck";

describe("sum", () => {
  test("simple", async () => {
    expect(sum([1, 2])).toBe(3);
  });

  test("with pluck", async () => {
    expect(sum(pluck([{ a: 1 }, { a: 2 }, { b: 2 }], "a"))).toBe(3);
  });
});
