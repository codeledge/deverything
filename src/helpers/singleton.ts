import { isPromise } from "../validators/isPromise";

/**
 * Creates a lazily-initialized singleton from a factory function.
 * Works with both sync and async factories — the return type mirrors the factory's.
 *
 * For async factories, concurrent callers during initialization share the same
 * in-flight promise rather than triggering multiple factory calls. If the promise
 * rejects, the singleton resets so the next call retries.
 */
export const singleton = <Result>(factory: () => Result): (() => Result) => {
  let hasInstance = false;
  let instance!: Result;

  return () => {
    if (hasInstance) {
      return instance;
    }

    const result = factory();

    if (isPromise(result)) {
      hasInstance = true;
      instance = result.then(
        (value) => value,
        (error) => {
          hasInstance = false;
          throw error;
        }
      ) as Result;

      return instance;
    }

    // not a promise
    hasInstance = true;
    instance = result;
    return result;
  };
};
