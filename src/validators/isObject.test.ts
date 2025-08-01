import { expect, it, describe } from "vitest";
import { isObject } from "./isObject";

describe("isObject", function () {
  it("checks correctly", function () {
    const objectUnkonwn = {} as unknown;
    expect(isObject(objectUnkonwn)).toBe(true);
    enum ENUM {}
    expect(isObject(ENUM)).toBe(true);
    expect(isObject(new Object())).toBe(true);

    expect(isObject(Symbol)).toBe(false);
    expect(isObject(Symbol.for("x"))).toBe(false);
    expect(isObject(new Set())).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(new Error())).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(new RegExp(``))).toBe(false);
    expect(isObject("string")).toBe(false);
    expect(isObject(33)).toBe(false);
    expect(isObject("\t\t")).toBe(false);
    expect(isObject("\n\r")).toBe(false);
    expect(isObject(Infinity)).toBe(false);
    expect(isObject(-Infinity)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject("")).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(parseInt("000"))).toBe(false);
  });
});
