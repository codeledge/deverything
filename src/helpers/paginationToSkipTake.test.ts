import { describe, expect, test } from "vitest";
import { paginationToSkipTake } from "./paginationToSkipTake";

describe("paginationToSkipTake", () => {
  test("first page", () => {
    expect(paginationToSkipTake({ page: 1, perPage: 10 })).toEqual({
      skip: 0,
      take: 10,
    });
  });

  test("second page", () => {
    expect(paginationToSkipTake({ page: 2, perPage: 10 })).toEqual({
      skip: 10,
      take: 10,
    });
  });

  test("third page with different perPage", () => {
    expect(paginationToSkipTake({ page: 3, perPage: 25 })).toEqual({
      skip: 50,
      take: 25,
    });
  });

  test("perPage of 1", () => {
    expect(paginationToSkipTake({ page: 5, perPage: 1 })).toEqual({
      skip: 4,
      take: 1,
    });
  });
});
