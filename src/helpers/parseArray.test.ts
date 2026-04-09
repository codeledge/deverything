import { describe, expect, test } from "vitest";
import { parseArray } from "./parseArray";

describe("parseArray", () => {
  test("default separator is comma", () => {
    expect(parseArray("a,b,c")).toEqual(["a", "b", "c"]);
    expect(parseArray("a, b, c")).toEqual(["a", "b", "c"]);
  });

  test("trims and drops empty segments", () => {
    expect(parseArray("  a  ,  , b ")).toEqual(["a", "b"]);
    expect(parseArray("")).toEqual([]);
    expect(parseArray(",,,")).toEqual([]);
  });

  test("custom separator", () => {
    expect(parseArray("a|b|c", { separator: "|" })).toEqual(["a", "b", "c"]);
    expect(parseArray("x; y ;z", { separator: ";" })).toEqual(["x", "y", "z"]);
  });
});
