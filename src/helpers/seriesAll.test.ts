import { describe, expect, test } from "@jest/globals";
import { seriesAll } from "./seriesAll";
import { sleep } from "./sleep";

describe("seriesAll", () => {
  test("simple", async () => {
    expect(
      await seriesAll([
        Promise.resolve(1),
        sleep(1).then(() => 2),
        () => Promise.resolve(3),
        async () => 5,
        async () => {
          await sleep(1);
          return 6;
        },
        async () => {
          return sleep(1).then(() => 7);
        },
      ])
    ).toStrictEqual([1, 2, 3, 5, 6, 7]);
  });

  test("throw new Error", () => {
    expect(
      seriesAll([
        () => {
          throw new Error("1");
        },
        () => {
          throw new Error("2");
        },
      ])
    ).rejects.toThrowError("1");
  });

  test("Promise.reject", () => {
    expect(
      seriesAll([Promise.reject("3"), () => Promise.reject("4")])
    ).rejects.toEqual("3");
  });
});
