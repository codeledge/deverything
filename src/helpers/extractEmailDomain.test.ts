import { describe, expect, test } from "vitest";
import { extractEmailDomain } from "./extractEmailDomain";

describe("extractEmailDomain", () => {
  test("extracts domain from a standard email", () => {
    expect(extractEmailDomain("user@example.com")).toBe("example.com");
  });

  test("extracts domain with subdomain", () => {
    expect(extractEmailDomain("user@mail.example.com")).toBe(
      "mail.example.com"
    );
  });

  test("returns undefined when there is no @", () => {
    expect(extractEmailDomain("notanemail")).toBeUndefined();
  });

  test("returns undefined when @ is the last character", () => {
    expect(extractEmailDomain("user@")).toBeUndefined();
  });

  test("handles multiple @ signs (uses first)", () => {
    expect(extractEmailDomain("a@b@example.com")).toBe("b@example.com");
  });
});
