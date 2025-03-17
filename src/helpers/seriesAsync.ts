import { isFunction } from "../validators";

type AsyncFunction<T = any> = () => Promise<T>;

type SeriesResult<T extends readonly AsyncFunction[]> = {
  [K in keyof T]: T[K] extends AsyncFunction<infer U> ? Awaited<U> : never;
};

/**
 *
 * @description Run a series of (async) functions in order and return the results
 * @example
 * const results = await seriesAsync([
 *  () => Promise.resolve(1),
 *  () => sleep(100).then(() => 2),
 *  () => Promise.resolve(3),
 *  async () => 4,
 * ]); => [1, 2, 3, 4]
 */
export const seriesAsync = async <T extends readonly AsyncFunction[]>(
  series: readonly [...T]
): Promise<SeriesResult<T>> => {
  const results: unknown[] = [];
  for (const fn of series) {
    if (isFunction(fn)) results.push(await fn());
    else {
      // The error is thrown deliberately because the function will work exactly the same but not being as performant
      // as it should, because the promises are already executed
      throw new Error(
        `seriesAsync: invalid type received "${typeof fn}", make sure all items are functions, not promises, otherwise they would've been executed already`
      );
    }
  }
  return results as SeriesResult<T>;
};
