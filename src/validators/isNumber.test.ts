import { expect, it, describe } from "@jest/globals";
import {
  isEven,
  isInt,
  isNegative,
  isNumber,
  isOdd,
  isPositive,
} from "./isNumber";

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

  describe("isPositive", function () {
    it("checks correctly", function () {
      expect(isPositive(1)).toBe(true);
      expect(isPositive(0)).toBe(false);
      expect(isPositive(Infinity)).toBe(false);
      expect(isPositive(-0)).toBe(false);
      expect(isPositive("0" as unknown as number)).toBe(false);
    });
  });

  describe("isNegative", function () {
    it("checks correctly", function () {
      expect(isNegative(1)).toBe(false);
      expect(isNegative(-1e12)).toBe(true);
      expect(isNegative(0)).toBe(false);
      expect(isNegative(Infinity)).toBe(false);
      expect(isNegative(-0)).toBe(false);
      expect(isNegative("0" as unknown as number)).toBe(false);
    });
  });
});
