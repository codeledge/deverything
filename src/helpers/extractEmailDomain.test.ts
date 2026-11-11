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

  test("splits on the last @, as a quoted local part may contain one", () => {
    expect(extractEmailDomain('"a@b"@example.com')).toBe("example.com");
    expect(extractEmailDomain("a@b@example.com")).toBe("example.com");
  });

  test("lowercases and trims the domain", () => {
    expect(extractEmailDomain("User@Example.COM ")).toBe("example.com");
  });

  test("returns undefined when the domain is only whitespace", () => {
    expect(extractEmailDomain("user@  ")).toBeUndefined();
  });
});
