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
  series: (Promise<T> | Function)[]
): Promise<T[]> => {
  const results: T[] = [];
  for (const fn of series) {
    if (isPromise(fn)) results.push(await fn);
    else if (isFunction(fn)) results.push(await fn());
    // pure value? just return it
    else results.push(fn);
  }
  return results;
};

// TODO: rename to seriesAsync
