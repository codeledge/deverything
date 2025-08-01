import { describe, expect, test } from "vitest";
import { isSame } from "./isSame";

describe("isSame", () => {
  test("date", async () => {
    const date = new Date();
    expect(isSame(date, date)).toBeTruthy();
    expect(isSame(new Date(), new Date())).toBeFalsy();
  });

  test("number", async () => {
    expect(isSame(1, 1)).toBeTruthy();
    expect(isSame(1, 0)).toBeFalsy();
  });

  test("nullish", async () => {
    expect(isSame(undefined, undefined)).toBeTruthy();
    expect(isSame(undefined, null)).toBeFalsy();
  });

  test("function", async () => {
    expect(
      isSame(
        () => {},
        () => {}
      )
    ).toBeTruthy();
    expect(
      isSame(
        () => {},
        () => 1
      )
    ).toBeFalsy();
  });

  test("object", async () => {
    expect(isSame({}, {})).toBeTruthy();
    expect(isSame({ a: 1 }, { a: 1 })).toBeTruthy();
    expect(isSame({ a: [] }, { a: [] })).toBeTruthy();
    expect(isSame({}, { a: 1 })).toBeFalsy();
  });

  test("array", async () => {
    expect(isSame([Infinity], [Infinity])).toBeTruthy();
    expect(isSame([1], [1])).toBeTruthy();
    expect(isSame([1, null, () => {}], [1, null, () => {}])).toBeTruthy();
    expect(isSame([1], [1, null, () => {}])).toBeFalsy();
  });
});
