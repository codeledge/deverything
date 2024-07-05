import { describe, expect, test } from "@jest/globals";

describe("merginIntervals", () => {
  const isPrime = (number: number) => {
    if (number <= 1) return false;
    if (number <= 3) return true;
    return Array.from({ length: number - 2 }).every((_, index) => {
      const divider = index + 2;
      if (number % divider === 0) {
        return false;
      }
      return true;
    });
  };

  test("no arg", async () => {
    expect(isPrime(0)).toBe(false);
    // expect(isPrime(1)).toBe(false);
    // expect(isPrime(2)).toBe(true);
    // expect(isPrime(3)).toBe(true);
    // expect(isPrime(23)).toBe(true);
    // expect(isPrime(22)).toBe(false);
    // expect(isPrime(21)).toBe(false);
  });
});
