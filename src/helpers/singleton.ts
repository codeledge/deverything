/**
 * Creates a lazily-initialized singleton from a factory function.
 * Works with both sync and async factories — the return type mirrors the factory's.
 *
 * For async factories, concurrent callers during initialization share the same
 * in-flight promise rather than triggering multiple factory calls. If the promise
 * rejects, the singleton resets so the next call retries.
 */
export const singleton = <Result>(factory: () => Result): (() => Result) => {
  let instance: Result | null = null;

  return () => {
    if (instance) {
      return instance;
    }

    const result = factory();

    if (result instanceof Promise) {
      instance = result.then(
        (value) => value,
        (error) => {
          instance = null;
          throw error;
        }
      ) as Result;

      return instance;
    }

    instance = result;
    return result;
  };
};
