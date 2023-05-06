import { describe, expect, test } from "@jest/globals";
import { controlCharRegex } from "./controlCharRegex";

describe("controlCharRegex", () => {
  test("args", async () => {
    expect(controlCharRegex.test("\n")).toBe(true);
    expect(controlCharRegex.test("\t")).toBe(true);
    expect(controlCharRegex.test("\v")).toBe(true);
    expect(controlCharRegex.test("\r")).toBe(true);
  });
});
