import { describe, expect, test } from "vitest";
import { parsePrimitive } from "./parsePrimitive";

describe("parsePrimitive", () => {
  test("empty and whitespace", () => {
    expect(parsePrimitive("")).toBe("");
    expect(parsePrimitive("   ")).toBe("");
  });

  test("booleans (case-insensitive)", () => {
    expect(parsePrimitive("true")).toBe(true);
    expect(parsePrimitive("TRUE")).toBe(true);
    expect(parsePrimitive("false")).toBe(false);
    expect(parsePrimitive("FaLsE")).toBe(false);
  });

  test("null and undefined keywords", () => {
    expect(parsePrimitive("null")).toBe(null);
    expect(parsePrimitive("NULL")).toBe(null);
    expect(parsePrimitive("undefined")).toBe(undefined);
    expect(parsePrimitive("Undefined")).toBe(undefined);
  });

  test("numeric strings via isNumeric", () => {
    expect(parsePrimitive("42")).toBe(42);
    expect(parsePrimitive("-3.5")).toBe(-3.5);
    expect(parsePrimitive("2e3")).toBe(2000);
    expect(parsePrimitive("0xff")).toBe(255);
    expect(parsePrimitive("0b101")).toBe(5);
    expect(parsePrimitive("1")).toBe(1);
    expect(parsePrimitive("0")).toBe(0);
  });

  test("coerceBoolean maps env-style tokens before numbers", () => {
    expect(parsePrimitive("1", { coerceBoolean: true })).toBe(1);
    expect(parsePrimitive("0", { coerceBoolean: true })).toBe(0);
    expect(parsePrimitive("YES", { coerceBoolean: true })).toBe(true);
    expect(parsePrimitive("No", { coerceBoolean: true })).toBe(false);
    expect(parsePrimitive("on", { coerceBoolean: true })).toBe(true);
    expect(parsePrimitive("OFF", { coerceBoolean: true })).toBe(false);
    expect(parsePrimitive("y", { coerceBoolean: true })).toBe(true);
    expect(parsePrimitive("N", { coerceBoolean: true })).toBe(false);
    expect(parsePrimitive("2", { coerceBoolean: true })).toBe(2);
    expect(parsePrimitive("01", { coerceBoolean: true })).toBe(1);
  });

  test("non-numeric and other text stays string (trimmed)", () => {
    expect(parsePrimitive("hello")).toBe("hello");
    expect(parsePrimitive("  maybe  ")).toBe("maybe");
    expect(parsePrimitive("1.2.3")).toBe("1.2.3");
    expect(parsePrimitive("NaN")).toBe(NaN);
    expect(parsePrimitive("Infinity")).toBe(Infinity);
    expect(parsePrimitive("-Infinity")).toBe(-Infinity);
  });
});
