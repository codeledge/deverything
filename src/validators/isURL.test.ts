import { expect, describe, it } from "@jest/globals";
import { isURL } from "./isURL";

describe("isURL", function () {
  it("checks correctly", function () {
    expect(isURL("a@a.a")).toBe(false);
    expect(isURL("")).toBe(false);
    expect(isURL(" ")).toBe(false);
    expect(isURL("localhost")).toBe(true);
    expect(isURL("http://localhost")).toBe(true);
    expect(isURL("https://localhost")).toBe(true);
    expect(isURL("//localhost")).toBe(false);
    expect(isURL("bim.bam")).toBe(true);
  });
});
