import { describe, expect, test } from "@jest/globals";

describe("validPalindrome", () => {
  function validPalindrome(s: string, MAX_DIFFS = 1): boolean {
    const isPalindrome = (sub: string, depth = 0): boolean => {
      if (depth > 0) console.log(sub);
      let leftPointer = 0;
      let rightPointer = sub.length - 1;

      while (leftPointer < rightPointer) {
        const leftChar = sub[leftPointer];
        const rightChar = sub[rightPointer];
        if (leftChar !== rightChar)
          return depth < MAX_DIFFS
            ? isPalindrome(sub.slice(leftPointer, rightPointer), depth + 1) ||
                isPalindrome(
                  sub.slice(leftPointer + 1, rightPointer + 1),
                  depth + 1
                )
            : false;

        leftPointer++;
        rightPointer--;
      }

      return true;
    };

    return isPalindrome(s);
  }

  test("no arg", async () => {
    expect(validPalindrome("12", 0)).toBe(true);
  });
});
