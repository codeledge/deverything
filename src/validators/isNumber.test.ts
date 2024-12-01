import { expect, it, describe } from "@jest/globals";
import {
  isBigInt,
  isBigIntString,
  isEven,
  isInt,
  isNegativeInt,
  isNumber,
  isOdd,
  isOutsideInt4,
  isPositiveInt,
} from "./isNumber";
import { INT4_MAX } from "../constants/numbers";

describe("isNumber", function () {
  describe("isNumber", function () {
    it("checks correctly", function () {
      expect(isNumber("string")).toBe(false);
      expect(isNumber("33")).toBe(false);
      expect(isNumber("-33")).toBe(false);
      expect(isNumber("2e12")).toBe(false);
      expect(isNumber("\t\t")).toBe(false);
      expect(isNumber("\n\r")).toBe(false);
      expect(isNumber(Infinity)).toBe(false);
      expect(isNumber(-Infinity)).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(parseInt("000"))).toBe(true);
      expect(isNumber(912312)).toBe(true);
      expect(isNumber(12.44)).toBe(true);
      expect(isNumber(-1244)).toBe(true);
      expect(isNumber(2e12)).toBe(true);
      expect(isNumber(0xff)).toBe(true);
      expect(isNumber(0b11111111)).toBe(true);
      expect(isNumber(0.255e3)).toBe(true);
      expect(isNumber(Math.PI)).toBe(true);
    });
  });

  describe("isInt", function () {
    it("checks correctly", function () {
      expect(isInt("string" as unknown as number)).toBe(false);
      expect(isInt("33" as unknown as number)).toBe(false);
      expect(isInt("-33" as unknown as number)).toBe(false);
      expect(isInt("2e12" as unknown as number)).toBe(false);
      expect(isInt("\t\t" as unknown as number)).toBe(false);
      expect(isInt("\n\r" as unknown as number)).toBe(false);
      expect(isInt(Infinity)).toBe(false);
      expect(isInt(-Infinity)).toBe(false);
      expect(isInt(null as unknown as number)).toBe(false);
      expect(isInt(undefined as unknown as number)).toBe(false);
      expect(isInt({} as unknown as number)).toBe(false);
      expect(isInt([] as unknown as number)).toBe(false);
      expect(isInt(0)).toBe(true);
      expect(isInt(912312)).toBe(true);
      expect(isInt(12.44)).toBe(false);
      expect(isInt(-1244)).toBe(true);
      expect(isInt(2e12)).toBe(true);
      expect(isInt(2.44e1)).toBe(false);
    });
  });

  describe("isOdd", function () {
    it("checks correctly", function () {
      expect(isOdd("string" as unknown as number)).toBe(false);
      expect(isOdd(1)).toBe(true);
      expect(isOdd(1.1)).toBe(false);
      expect(isOdd(-1 - 2)).toBe(true);
    });
  });

  describe("isEven", function () {
    it("checks correctly", function () {
      expect(isEven("string" as unknown as number)).toBe(false);
      expect(isEven(1)).toBe(false);
      expect(isEven(0)).toBe(true);
      expect(isEven(Infinity)).toBe(false);
      expect(isEven(-0)).toBe(true);
    });
  });

  describe("isPositiveInt", function () {
    it("checks correctly", function () {
      expect(isPositiveInt(1)).toBe(true);
      expect(isPositiveInt(0)).toBe(false);
      expect(isPositiveInt(Infinity)).toBe(false);
      expect(isPositiveInt(-0)).toBe(false);
      expect(isPositiveInt("0" as unknown as number)).toBe(false);
      expect(isPositiveInt("-20" as unknown as number)).toBe(false);
      expect(isPositiveInt(+"-20")).toBe(false);
      expect(isPositiveInt(+"20")).toBe(true);
      expect(isPositiveInt(Number("20e2"))).toBe(true);
      expect(isPositiveInt(Number("0"))).toBe(false);
    });
  });

  describe("isNegativeInt", function () {
    it("checks correctly", function () {
      expect(isNegativeInt(1)).toBe(false);
      expect(isNegativeInt(-1e12)).toBe(true);
      expect(isNegativeInt(0)).toBe(false);
      expect(isNegativeInt(Infinity)).toBe(false);
      expect(isNegativeInt(-0)).toBe(false);
      expect(isNegativeInt("0" as unknown as number)).toBe(false);
    });
  });

  describe("isBigInt", function () {
    it("checks true", function () {
      expect(isBigInt(BigInt(12345678901234567890))).toBe(true);
      expect(isBigInt(1n)).toBe(true);
      expect(isBigInt(0n)).toBe(true);
    });

    it("checks false", function () {
      expect(isBigInt(Number.MAX_SAFE_INTEGER)).toBe(false);
      expect(isBigInt(Number.MAX_SAFE_INTEGER + 1)).toBe(false); // ???
      expect(isBigInt(1)).toBe(false);
      expect(isBigInt(0)).toBe(false);
    });
  });
});

describe("isBigIntString", function () {
  it("checks true", function () {
    expect(isBigIntString("12345678901234567890")).toBe(true);
  });

  it("checks false", function () {
    expect(isBigIntString(Number.MAX_SAFE_INTEGER.toString())).toBe(false);
    expect(isBigIntString("1")).toBe(false);
  });
});

describe("isOutsideInt4", function () {
  it("checks true", function () {
    expect(isOutsideInt4(12345678901234567890)).toBe(true);
    expect(isOutsideInt4(-12345678901234567890)).toBe(true);
  });

  it("checks false", function () {
    expect(isOutsideInt4(INT4_MAX)).toBe(false);
    expect(isOutsideInt4(1)).toBe(false);
    expect(isOutsideInt4(0)).toBe(false);
    expect(isOutsideInt4(12345678901234567890 / 10e9)).toBe(false);
  });
});
