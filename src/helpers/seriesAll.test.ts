import { describe, expect, test } from "@jest/globals";
import { seriesAll } from "./seriesAll";
import { sleep } from "./sleep";

describe("seriesAll", () => {
  const fn1 = () => Promise.resolve(1);
  const fn2 = () => sleep(100).then(() => 2);
  const fn3 = () => 3;

  test("simple", async () => {
    expect(seriesAll<number>([fn1, fn2, fn3])).resolves.toEqual([1, 2, 3]);
    expect(await seriesAll([() => true])).toStrictEqual([true]);
  });
});
