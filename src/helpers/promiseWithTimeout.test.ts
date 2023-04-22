import { expect, test } from "@jest/globals";
import { promiseWithTimeout } from "./promiseWithTimeout";
import { jest } from "@jest/globals";

test("promiseWithTimeout", async () => {
  jest.useFakeTimers();

  const testPromise = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("success"), 200);
    });

  const result = promiseWithTimeout(testPromise, 500);
  const resultError = promiseWithTimeout(testPromise, 100);
  const resultCustomError = promiseWithTimeout(
    testPromise,
    100,
    new Error("custom error")
  );

  jest.advanceTimersByTime(220);

  await expect(result).resolves.toEqual("success");
  await expect(resultError).rejects.toThrow();
  await expect(resultCustomError).rejects.toThrow(new Error("custom error"));
});
