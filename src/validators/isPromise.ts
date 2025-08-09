export const isPromise = (arg?: unknown): arg is Promise<unknown> =>
  arg instanceof Promise;
