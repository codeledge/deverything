import { describe, expect, test } from "vitest";
import { formatSlug } from "./formatSlug";

describe("formatSlug", () => {
  test("replaces spaces with hyphens and lowercases by default", () => {
    expect(formatSlug("Hello World")).toBe("hello-world");
  });

  test("transliterates latin characters", () => {
    expect(formatSlug("Crème brûlée")).toBe("creme-brulee");
    expect(formatSlug("José García")).toBe("jose-garcia");
  });

  test("lower option can be disabled", () => {
    expect(formatSlug("Hello World", { lower: false })).toBe("Hello-World");
  });

  test("custom replacement", () => {
    expect(formatSlug("Hello World", { replacement: "_" })).toBe("hello_world");
    expect(formatSlug("Hello World", { replacement: " " })).toBe("hello world");
  });

  test("strict strips non-alphanumeric", () => {
    expect(formatSlug("foo@bar!", { strict: true })).toBe("foobar");
    expect(formatSlug("José García", { replacement: " ", strict: true })).toBe(
      "jose garcia"
    );
  });

  test("trim option", () => {
    expect(formatSlug("  hello  ", { trim: true })).toBe("hello");
    expect(formatSlug("  hello  ", { trim: false })).toBe("-hello-");
  });

  test("collapses consecutive spaces", () => {
    expect(formatSlug("too   many   spaces")).toBe("too-many-spaces");
  });

  test("symbols", () => {
    expect(formatSlug("100%")).toBe("100percent");
    expect(formatSlug("C++ & Java")).toBe("c++-and-java");
  });

  test("empty string", () => {
    expect(formatSlug("")).toBe("");
  });

  test("custom map overrides", () => {
    expect(formatSlug("§ 1", { map: { "§": "section" } })).toBe("section-1");
  });
});
