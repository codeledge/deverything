import { expect, it, describe } from "@jest/globals";
import { checkEnvVars } from "./checkEnvVars";

describe("checkEnvVars", function () {
  describe("SimpleValidation", function () {
    it("undefined value", function () {
      expect(() =>
        checkEnvVars({
          MISSING: true,
        })
      ).toThrow();
      expect(() =>
        checkEnvVars({
          MISSING: "always",
        })
      ).toThrow();

      expect(() =>
        checkEnvVars({
          MISSING: false,
        })
      ).not.toThrow();
      expect(() =>
        checkEnvVars({
          MISSING: "never",
        })
      ).not.toThrow();
    });

    it("string value", function () {
      process.env.IS_THERE = "true";
      expect(() =>
        checkEnvVars({
          IS_THERE: true,
        })
      ).not.toThrow();

      expect(() =>
        checkEnvVars({
          IS_THERE: false,
        })
      ).toThrow();
    });

    it("empty value", function () {
      process.env.IS_THERE_EMPTY = "";

      // DOES throw because empty string could be result of `VAR=` in .env file
      expect(() =>
        checkEnvVars({
          IS_THERE_EMPTY: true,
        })
      ).toThrow();

      expect(() =>
        checkEnvVars({
          IS_THERE_EMPTY: false, // TODO, send warning for empty string
        })
      ).not.toThrow();
    });
  });

  describe("AdvancedValidation", function () {
    process.env.TEST_VAL = "TEST_VAL";

    it("simple", function () {
      expect(() =>
        checkEnvVars({
          TEST_VAL: {
            TEST: true,
            DEV: false,
          },
        })
      ).not.toThrow();
    });
    it("direct oneOf", function () {
      expect(() =>
        checkEnvVars({
          TEST_VAL: { oneOf: ["TEST_VAL", "TEST_VALDO"] },
        })
      ).not.toThrow();
    });

    it("env oneOf", function () {
      expect(() =>
        checkEnvVars({
          TEST_VAL: {
            TEST: {
              oneOf: ["TEST_VAL", "TEST_VALDO"],
            },
            STAGE: {
              oneOf: ["doesnt", "matter"],
            },
          },
        })
      ).not.toThrow();
    });
  });
});
