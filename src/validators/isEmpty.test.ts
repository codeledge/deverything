import { describe, expect, test } from "@jest/globals";
import { isEmpty } from "./isEmpty";

describe("isEmpty", () => {
  test("mixed", async () => {
    expect(isEmpty()).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(void 0)).toBeTruthy();
    expect(isEmpty(0)).toBeFalsy();
    expect(isEmpty(() => {})).toBeFalsy();
  });

  test("array", async () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty([1])).toBeFalsy();
  });

  test("object", async () => {
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty({ key: "value" })).toBeFalsy();
  });
});
