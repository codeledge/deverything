import { describe, expect, test } from "vitest";
import { formatCamelCase } from "./formatCamelCase";

describe("formatCamelCase", () => {
  test("should convert hyphenated string to camelCase", () => {
    expect(formatCamelCase("hello-world")).toBe("helloWorld");
  });

  test("should convert underscore string to camelCase", () => {
    expect(formatCamelCase("hello_world")).toBe("helloWorld");
  });

  test("should convert space-separated string to camelCase", () => {
    expect(formatCamelCase("hello world")).toBe("helloWorld");
  });

  test("should handle multiple words", () => {
    expect(formatCamelCase("hello-world-foo-bar")).toBe("helloWorldFooBar");
  });

  test("should handle mixed separators", () => {
    expect(formatCamelCase("hello-world_foo bar")).toBe("helloWorldFooBar");
  });

  test("should handle single word", () => {
    expect(formatCamelCase("hello")).toBe("hello");
  });

  test("should handle already capitalized string", () => {
    expect(formatCamelCase("Hello World")).toBe("helloWorld");
  });

  test("should handle numbers in the string", () => {
    expect(formatCamelCase("hello-world-123")).toBe("helloWorld123");
  });
});
