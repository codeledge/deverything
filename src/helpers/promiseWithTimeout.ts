export const promiseWithTimeout = <T>(
  promise: () => Promise<T>,
  timeoutMs: number,
  error?: Error
): Promise<T> => {
  let timeout: ReturnType<typeof setTimeout>;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeout = setTimeout(
      () => reject(error ?? new Error("Promise timed out")),
      timeoutMs
    );
  });

  return Promise.race([promise(), timeoutPromise]).finally(() => {
    clearTimeout(timeout);
  });
};
