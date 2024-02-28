import { describe, expect, it } from "@jest/globals";
import { chunkedAsync } from "./chunkedAsync";
import { sum } from "../math";

describe("chunkedAsync", () => {
  it("should return an array of results after applying the provided function to each chunk", async () => {
    const result = await chunkedAsync(
      [1, 2, 3, 4, 5, 6, 7, 8],
      3,
      async (chunk) => {
        return Promise.resolve(sum(chunk));
      }
    );

    expect(result).toStrictEqual([6, 15, 15]);
  });
});
