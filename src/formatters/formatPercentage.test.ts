import { describe, expect, test } from "vitest";
import { formatPercentage, formatPercentageNumber } from "./formatPercentage";

describe("formatPercentageNumber", () => {
  test("converts ratio to percentage string", () => {
    expect(formatPercentageNumber(0.5)).toBe("50");
  });

  test("respects digits option", () => {
    expect(formatPercentageNumber(0.123456, { digits: 2 })).toBe("12.35");
  });

  test("clamps to -100 at minimum", () => {
    expect(formatPercentageNumber(-0.5)).toBe("-50");
    expect(formatPercentageNumber(-2)).toBe("-100");
  });

  test("clamps to 100 at maximum", () => {
    expect(formatPercentageNumber(1.5)).toBe("100");
  });

  describe("sign", () => {
    test("prefixes positive values with +", () => {
      expect(formatPercentageNumber(0.25, { sign: true })).toBe("+25");
    });

    test("no prefix for zero", () => {
      expect(formatPercentageNumber(0, { sign: true })).toBe("0");
    });

    test("negative value shows minus sign from the number", () => {
      expect(formatPercentageNumber(-0.1, { sign: true })).toBe("-10");
    });

    test("respects digits alongside sign", () => {
      expect(formatPercentageNumber(0.1234, { sign: true, digits: 2 })).toBe(
        "+12.34"
      );
    });
  });
});

describe("formatPercentage", () => {
  test("appends % symbol", () => {
    expect(formatPercentage(1)).toBe("100%");
    expect(formatPercentage(0, { digits: 2 })).toBe("0.00%");
  });

  describe("sign", () => {
    test("prefixes positive values with +", () => {
      expect(formatPercentage(0.25, { sign: true })).toBe("+25%");
    });

    test("prefixes negative values with -", () => {
      expect(formatPercentage(-0.25, { sign: true })).toBe("-25%");
    });

    test("no prefix for zero", () => {
      expect(formatPercentage(0, { sign: true })).toBe("0%");
    });

    test("respects digits alongside sign", () => {
      expect(formatPercentage(0.1234, { sign: true, digits: 2 })).toBe(
        "+12.34%"
      );
    });
  });
});
