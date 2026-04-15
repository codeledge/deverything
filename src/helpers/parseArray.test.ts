import { describe, expect, test } from "vitest";
import { parseArray } from "./parseArray";

describe("parseArray", () => {
  test("default separator is comma", () => {
    expect(parseArray("")).toEqual([]);
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

  test("uniqueValues removes duplicates", () => {
    expect(
      parseArray("a,b;a;c;b,a", { separator: ";", uniqueValues: true })
    ).toEqual(["a,b", "a", "c", "b,a"]);
    expect(parseArray("a,b,a,c,b", { uniqueValues: true })).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  test("uniqueValues keeps duplicates when false", () => {
    expect(parseArray("a,b,a,c,b")).toEqual(["a", "b", "a", "c", "b"]);
    expect(parseArray("a,b,a", { uniqueValues: false })).toEqual([
      "a",
      "b",
      "a",
    ]);
  });

  test("uniqueValues with numeric-like values", () => {
    expect(parseArray("1,2,1,3", { uniqueValues: true })).toEqual([1, 2, 3]);
  });
});
