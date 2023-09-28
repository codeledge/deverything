import { describe, expect, test } from "@jest/globals";
import { isNumericId } from "./isNumericId";

describe("isNumericId", () => {
  test("true", async () => {
    expect(isNumericId("1")).toBe(true);
    expect(isNumericId("99999999")).toBe(true);
  });

  test("false", async () => {
    expect(isNumericId("0")).toBe(false);
    expect(isNumericId("2e3")).toBe(false);
    expect(isNumericId("-0")).toBe(false);
    expect(isNumericId("-1")).toBe(false);
    expect(isNumericId(" ")).toBe(false);
    expect(isNumericId(" 1")).toBe(false);
    expect(isNumericId(" 1 ")).toBe(false);
    expect(isNumericId(" 1 1")).toBe(false);
    expect(isNumericId("1.1")).toBe(false);
    expect(isNumericId("8/28/2023")).toBe(false);
  });
});
