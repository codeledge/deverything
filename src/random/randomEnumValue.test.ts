import { describe, expect, test } from "vitest";
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
    expect([0, 1]).toContain(randomEnumValue(DEFAULT_ENUM));
  });
  test("explicit", async () => {
    enum EXPLICIT_ENUM {
      TWO = 2,
      THREE = 3,
    }
    // => { '2': 'TWO', '3': 'THREE', TWO: 2, THREE: 3 }
    expect([2, 3]).toContain(randomEnumValue(EXPLICIT_ENUM));
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
      THREE = 3,
    }
    // => { '0': 'ONE', '3': 'THREE', ONE: 0, TWO: 'TWO', THREE: 3 }
    expect([0, "TWO", 3]).toContain(randomEnumValue(MIXED_ENUM));
  });
});
