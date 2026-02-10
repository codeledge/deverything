import { describe, expect, test } from "vitest";
import { formatPascalCase } from "./formatPascalCase";

describe("formatPascalCase", () => {
  test("should convert hyphenated string to PascalCase", () => {
    expect(formatPascalCase("hello-world")).toBe("HelloWorld");
  });

  test("should convert underscore string to PascalCase", () => {
    expect(formatPascalCase("hello_world")).toBe("HelloWorld");
  });

  test("should convert space-separated string to PascalCase", () => {
    expect(formatPascalCase("hello world")).toBe("HelloWorld");
  });

  test("should handle multiple words", () => {
    expect(formatPascalCase("hello-world-foo-bar")).toBe("HelloWorldFooBar");
  });

  test("should handle mixed separators", () => {
    expect(formatPascalCase("hello-world_foo bar")).toBe("HelloWorldFooBar");
  });

  test("should handle single word", () => {
    expect(formatPascalCase("hello")).toBe("Hello");
  });

  test("should handle already capitalized string", () => {
    expect(formatPascalCase("HELLO-WORLD")).toBe("HelloWorld");
  });

  test("should handle numbers in the string", () => {
    expect(formatPascalCase("hello-world-123")).toBe("HelloWorld123");
  });
});
