import { describe, expect, test } from "@jest/globals";
import { randomEnumKey } from "./randomEnumKey";

describe("randomEnumKey", () => {
  test("empty", async () => {
    enum EMPTY_ENUM {}
    expect(randomEnumKey(EMPTY_ENUM)).toBe(undefined);
  });
  test("default", async () => {
    enum DEFAULT_ENUM {
      ONE,
      TWO,
    }
    // =>  { '0': 'ONE', '1': 'TWO', ONE: 0, TWO: 1 }
    expect(["ONE", "TWO"]).toContain(randomEnumKey(DEFAULT_ENUM));
  });
  test("explicit", async () => {
    enum EXPLICIT_ENUM {
      TWO = 2,
      THREE = 3,
    }
    // => { '2': 'TWO', '3': 'THREE', TWO: 2, THREE: 3 }
    expect(["THREE", "TWO"]).toContain(randomEnumKey(EXPLICIT_ENUM));
  });
  test("string", async () => {
    enum STRING_ENUM {
      ONE = "ONE",
      TWO = "TWO",
    }
    // => { ONE: 'ONE', TWO: 'TWO' }
    expect(["ONE", "TWO"]).toContain(randomEnumKey(STRING_ENUM));
  });
  test("mixed", async () => {
    enum MIXED_ENUM {
      ONE,
      TWO = "TWO",
    }
    // => { '0': 'ONE', ONE: 0, TWO: 'TWO' }
    expect(["ONE", "TWO"]).toContain(randomEnumKey(MIXED_ENUM));
  });
});
