import { expect, it, describe } from "@jest/globals";
import { isNumeric } from "./isNumeric";

describe("isNumeric", function () {
  it("checks true", function () {
    expect(isNumeric("33")).toBe(true);
    expect(isNumeric("-33")).toBe(true);
    expect(isNumeric("2e12")).toBe(true);
    expect(isNumeric("2E-5")).toBe(true);
    expect(isNumeric("2.22")).toBe(true);
    expect(isNumeric(".22")).toBe(true);
    expect(isNumeric("0xff")).toBe(true);
    expect(isNumeric("0xF")).toBe(true);
    expect(isNumeric("0Xabc123")).toBe(true);
    expect(isNumeric("0b11111111")).toBe(true);
    expect(isNumeric("0B0")).toBe(true);
    expect(isNumeric("0.255e3")).toBe(true);
  });

  it("checks false", function () {
    expect(isNumeric("570f0248-1e00-4cbf-9a01-ea1fe20ce0b5")).toBe(false);
    expect(isNumeric("string")).toBe(false);
    expect(isNumeric("")).toBe(false);
    expect(isNumeric(" ")).toBe(false);
    expect(isNumeric(" 1 ")).toBe(false);
    expect(isNumeric("1 3")).toBe(false);
    expect(isNumeric("..1")).toBe(false);
    expect(isNumeric("\t")).toBe(false);
    expect(isNumeric("0B2")).toBe(false);
    expect(isNumeric("0xzy")).toBe(false);
    expect(isNumeric("\n")).toBe(false);
    expect(isNumeric("\r")).toBe(false);
    expect(isNumeric(Infinity)).toBe(false);
    expect(isNumeric(-Infinity)).toBe(false);
    expect(isNumeric(Math.pow as unknown as number)).toBe(false);
    expect(isNumeric(null as unknown as number)).toBe(false);
    expect(isNumeric(undefined as unknown as number)).toBe(false);
  });
});
