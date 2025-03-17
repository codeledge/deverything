import { describe, expect, test } from "@jest/globals";
import { seriesAsync } from "./seriesAsync";
import { sleep } from "./sleep";

describe("seriesAsync", () => {
  test("invalid arg", () => {
    expect(seriesAsync([Promise.resolve(10)] as any)).rejects.toThrowError();
    expect(seriesAsync([new Promise(() => {})] as any)).rejects.toThrowError();
    expect(seriesAsync([sleep(1)] as any)).rejects.toThrowError();
  });

  test("simple", async () => {
    expect(
      await seriesAsync([
        () => Promise.resolve(1),
        () => sleep(1).then(() => 2),
        () => Promise.resolve("3"),
        async () => 5,
        async () => {
          await sleep(1);
          return 6;
        },
        async () => {
          return sleep(1).then(() => 7);
        },
        async () => {
          return await sleep(1);
        },
      ])
    ).toStrictEqual([1, 2, "3", 5, 6, 7, undefined]);
  });

  test("throw new Error", () => {
    expect(
      seriesAsync([
        async () => {
          await sleep(1); // make sure it throws before the next function anywway
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
      seriesAsync([
        () => Promise.reject("3"),
        async () => 3.5,
        () => Promise.reject("4"),
      ])
    ).rejects.toEqual("3");
  });
});
