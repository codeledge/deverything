import { describe, expect, test } from "vitest";
import { formatInitials } from "./formatInitials";

describe("formatInitials", () => {
  test("returns initials from words", () => {
    expect(formatInitials("five random words what else")).toBe("FR");
    expect(formatInitials("two Words")).toBe("TW");
    expect(formatInitials("two    Words")).toBe("TW");
    expect(formatInitials("Bonnie ")).toBe("B");
    expect(formatInitials("hello")).toBe("H");
  });

  test("handles emoji", () => {
    expect(formatInitials("⏰😹🔮")).toBe("⏰");
    expect(formatInitials("😍For ds")).toBe("😍D");
    expect(formatInitials("⏰ 🔮 🫡")).toBe("⏰🔮");
  });

  test("empty and nullish", () => {
    expect(formatInitials("     ")).toBe("");
    expect(formatInitials("")).toBe("");
    expect(formatInitials(undefined)).toBe("");
    expect(formatInitials(null)).toBe("");
  });
});
