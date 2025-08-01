import { describe, expect, test } from "vitest";
import { average } from "./average";

describe("average", () => {
  test("no arg", async () => {
    expect(average([])).toBe(NaN);
  });

  test("args", async () => {
    expect(average([1, 2])).toBe(1.5);
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  test("bigint", async () => {
    expect(average([30035036979, 30035036981])).toBe(30035036980);
  });
});
