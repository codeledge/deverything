/**
 *
 * @description Run a series of (async) functions in order and return the results
 * @example
 * const results = await seriesAll([
 *  () => Promise.resolve(1),
 *  () => sleep(100).then(() => 2),
 *  () => Promise.resolve(3),
 * ]); => [1, 2, 3]
 */
export const seriesAll = async <T>(series: Function[]): Promise<T[]> => {
  const results: T[] = [];
  for (const fn of series) {
    results.push(await fn());
  }
  return results;
};

// TODO: rename to seriesAsync
