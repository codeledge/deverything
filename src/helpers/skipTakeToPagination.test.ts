import { describe, expect, test } from "vitest";
import { skipTakeToPagination } from "./skipTakeToPagination";

describe("skipTakeToPagination", () => {
  test("first page", () => {
    expect(skipTakeToPagination({ skip: 0, take: 10 })).toEqual({
      page: 1,
      perPage: 10,
    });
  });

  test("second page", () => {
    expect(skipTakeToPagination({ skip: 10, take: 10 })).toEqual({
      page: 2,
      perPage: 10,
    });
  });

  test("third page with different perPage", () => {
    expect(skipTakeToPagination({ skip: 50, take: 25 })).toEqual({
      page: 3,
      perPage: 25,
    });
  });

  test("perPage of 1", () => {
    expect(skipTakeToPagination({ skip: 4, take: 1 })).toEqual({
      page: 5,
      perPage: 1,
    });
  });
});
