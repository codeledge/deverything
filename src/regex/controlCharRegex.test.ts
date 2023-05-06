import { describe, expect, test } from "@jest/globals";
import { controlCharRegex } from "./controlCharRegex";

describe("controlCharRegex", () => {
  test("args", async () => {
    expect(controlCharRegex.test("\r")).toBe(true);
    controlCharRegex.lastIndex = 0;
    expect(controlCharRegex.test("\t")).toBe(true);
    controlCharRegex.lastIndex = 0;
    expect(controlCharRegex.test("\n")).toBe(true);
    controlCharRegex.lastIndex = 0;
    expect(controlCharRegex.test("\v")).toBe(true);
    controlCharRegex.lastIndex = 0;
    expect(controlCharRegex.test("\b")).toBe(true);
    controlCharRegex.lastIndex = 0;
    expect(controlCharRegex.test("\f")).toBe(true);
    controlCharRegex.lastIndex = 0;
    expect(controlCharRegex.test("\u0000")).toBe(true);
    controlCharRegex.lastIndex = 0;
    expect(controlCharRegex.test("\ud80a")).toBe(true);
    controlCharRegex.lastIndex = 0;
  });
});
