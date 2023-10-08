import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

describe("sum", () => {
  test("simple", async () => {
    expect(sum([1, 2])).toBe(3);
  });
});
