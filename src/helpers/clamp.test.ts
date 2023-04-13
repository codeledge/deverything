import { describe, expect, test } from "@jest/globals";
import { clamp } from "./clamp";

describe("clamp", () => {
  test("args", async () => {
    expect(clamp({ number: 0, min: 0, max: 0 })).toBe(0);
    expect(clamp({ number: -10, min: 0, max: 0 })).toBe(0);
    expect(clamp({ number: 10, min: 0, max: 0 })).toBe(0);
    expect(clamp({ number: -1, min: 0, max: -10 })).toBe(0);
    expect(clamp({ number: 10, min: 0, max: -10 })).toBe(-10);
    expect(clamp({ number: 10.1, min: 0, max: 100 })).toBe(10.1);
    expect(clamp({ number: 10.1, min: 0, max: 9.9 })).toBe(9.9);
    expect(clamp({ number: Infinity, min: 0, max: 9.9 })).toBe(9.9);
    expect(clamp({ number: -Infinity, min: 0, max: 9.9 })).toBe(0);
    expect(clamp({ number: -Infinity, min: Math.PI, max: 9.9 })).toBe(Math.PI);
  });
});
