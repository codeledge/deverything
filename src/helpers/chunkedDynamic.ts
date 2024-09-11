import { sleep } from "./sleep";

/**
 * @description Run a series of (async) functions with dynamic chunk sizes
 * @param array - Array to chunk
 * @param initialChunkSize - Size of initial chunk
 * @param fn - Function to run on each chunk
 * @param options.sleepTime - Time to sleep between each chunk
 * @param options.maxChunkDuration - Time to sleep between each chunk
 * @param options.chunkSizeStep - Step to increase/decrease chunk size (works only if maxChunkDuration is set)
 */
export const chunkedDynamic = async <T>(
  array: T[],
  initialChunkSize: number,
  fn: (chunk: T[], currentChunkSize: number) => Promise<any>,
  {
    sleepTime,
    maxChunkDuration,
    chunkSizeStep,
  }: {
    sleepTime?: number;
    maxChunkDuration?: number;
    chunkSizeStep?: number;
  } = {}
): Promise<any[]> => {
  const chunkResults: any[] = [];

  let currentIndex = 0;
  let currentChunkSize = initialChunkSize;
  const step = chunkSizeStep || 1;

  while (currentIndex < array.length) {
    const start = performance.now();
    const chunk = array.slice(currentIndex, currentIndex + currentChunkSize);
    const chunkResult = await fn(chunk, currentChunkSize);
    chunkResults.push(chunkResult);
    if (sleepTime) await sleep(sleepTime);
    if (maxChunkDuration) {
      const duration = performance.now() - start;
      if (duration > maxChunkDuration) {
        if (currentChunkSize <= 1)
          // < is just for safety, should not go below 1
          await sleep(duration - maxChunkDuration); // Sleep the remaining time
        else {
          if (currentChunkSize - step < 1) currentChunkSize = 1;
          else currentChunkSize -= step; // decrease chunk size to slow down
        }
      } else {
        currentChunkSize += step; // increase chunk size to speed up
      }
    }

    currentIndex += currentChunkSize;
  }

  return chunkResults;
};
