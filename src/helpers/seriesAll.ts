import { isFunction, isPromise } from "../validators";

/**
 *
 * @description Run a series of (async) functions in order and return the results
 * @example
 * const results = await seriesAll([
 *  Promise.resolve(1),
 *  sleep(100).then(() => 2),
 *  () => Promise.resolve(3),
 *  async () => 4,
 * ]); => [1, 2, 3, 4]
 */
export const seriesAll = async <T>(
  series: (Promise<T> | (() => Promise<T>))[]
): Promise<T[]> => {
  const results = [];
  for (const fn of series) {
    if (isPromise(fn)) results.push(await fn);
    else if (isFunction(fn)) results.push(await fn());
    else throw new Error("seriesAll: invalid type");
  }

  // TODO: "as T[];" fix TS error
  // error TS2345: Argument of type '(() => Promise<T>) | Awaited<T>' is not assignable to parameter of type 'T'.
  // 'T' could be instantiated with an arbitrary type which could be unrelated to '(() => Promise<T>) | Awaited<T>'.
  return results as T[];
};

// TODO: rename to seriesAsync
