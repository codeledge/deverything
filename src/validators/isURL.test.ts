import { expect, describe, it } from "vitest";
import { isURL } from "./isURL";

describe("isURL", () => {
  it("false", () => {
    expect(isURL("a@a.a")).toBe(false);
    expect(isURL("")).toBe(false);
    expect(isURL(" ")).toBe(false);
    expect(isURL("/localhost")).toBe(false);
    expect(isURL("file://../localhost")).toBe(false);
    expect(isURL("../localhost")).toBe(false);
    expect(isURL("//localhost")).toBe(false);
  });

  it("true", () => {
    expect(isURL("localhost")).toBe(true);
    expect(isURL("http://localhost")).toBe(true);
    expect(isURL("https://localhost")).toBe(true);
    expect(isURL("bim.bam")).toBe(true);
  });
});
