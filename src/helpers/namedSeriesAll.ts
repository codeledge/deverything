import { isFunction, isPromise } from '../validators'

type NamedSeriesResult<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Promise<infer U>
    ? U
    : T[K] extends () => Promise<infer U>
    ? U
    : never
} & {}

/**
 * @description Run a series of (async) functions in order and return the results as an object with the same keys.
 * @example
 * const { foo, bar } = await namedSeriesAll({
 *   foo: Promise.resolve(1),
 *   bar: async () => 2,
 * }); // => { foo: 1, bar: 2 }
 */
export const namedSeriesAll = async <T extends Record<string, unknown>>(
  series: T,
): Promise<NamedSeriesResult<T>> => {
  const results = {} as NamedSeriesResult<T>

  for (const key of Object.keys(series) as (keyof T)[]) {
    const fn = series[key]
    if (isPromise(fn))
      results[key] = (await fn) as NamedSeriesResult<T>[typeof key]
    else if (isFunction(fn)) results[key] = await fn()
    else throw new Error('namedSeriesAll: invalid type')
  }
  return results
}
