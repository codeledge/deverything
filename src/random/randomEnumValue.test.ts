import { describe, expect, test } from "@jest/globals";
import { randomEnumValue } from "./randomEnumValue";

describe("randomEnumValue", () => {
  test("empty", async () => {
    enum EMPTY_ENUM {}
    expect(randomEnumValue(EMPTY_ENUM)).toBe(undefined);
  });
  test("default", async () => {
    enum DEFAULT_ENUM {
      ONE,
      TWO,
    }
    // =>  { '0': 'ONE', '1': 'TWO', ONE: 0, TWO: 1 }
    expect(["ONE", "TWO"]).toContain(randomEnumValue(DEFAULT_ENUM));
  });
  test("string", async () => {
    enum STRING_ENUM {
      ONE = "ONE",
      TWO = "TWO",
    }
    // => { ONE: 'ONE', TWO: 'TWO' }
    expect(["ONE", "TWO"]).toContain(randomEnumValue(STRING_ENUM));
  });
  test("mixed", async () => {
    enum MIXED_ENUM {
      ONE,
      TWO = "TWO",
    }
    // => { '0': 'ONE', ONE: 0, TWO: 'TWO' }
    expect(["ONE", "TWO"]).toContain(randomEnumValue(MIXED_ENUM));
  });
});
