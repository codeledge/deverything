import { isFunction } from "../validators";

type SeriesResult<T extends readonly unknown[]> = {
  [K in keyof T]: T[K] extends () => infer U ? Awaited<U> : never;
};

/**
 *
 * @description Run a series of (async) functions in order and return the results
 * @example
 * const results = await seriesAsync([
 *  Promise.resolve(1),
 *  sleep(100).then(() => 2),
 *  () => Promise.resolve(3),
 *  async () => 4,
 * ]); => [1, 2, 3, 4]
 */
export const seriesAsync = async <T extends readonly unknown[]>(
  series: readonly [...T]
): Promise<SeriesResult<T>> => {
  const results: unknown[] = [];
  for (const fn of series) {
    if (isFunction(fn)) results.push(await fn());
    else throw new Error("seriesAsync: invalid type");
  }
  return results as SeriesResult<T>;
};
