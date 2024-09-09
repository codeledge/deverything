import { sleep } from "./sleep";

/**
 * @description Run a series of (async) functions with dynamic chunk sizes
 * @param array - Array to chunk
 * @param initialChunkSize - Size of initial chunk
 * @param fn - Function to run on each chunk
 * @param options.sleepTime - Time to sleep between each chunk
 * @param options.maxChunkDuration - Time to sleep between each chunk
 */
export const chunkedDynamic = async <T>(
  array: T[],
  initialChunkSize: number,
  fn: (chunk: T[], currentChunkSize: number) => Promise<any>,
  {
    sleepTime,
    maxChunkDuration,
  }: {
    sleepTime?: number;
    maxChunkDuration?: number;
  } = {}
): Promise<any[]> => {
  const chunkResults: any[] = [];

  let currentIndex = 0;
  let currentChunkSize = initialChunkSize;

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
          await sleep(duration - maxChunkDuration); // Sleep the remaining time
        else currentChunkSize -= 1; // decrease chunk size to slow down
      } else {
        currentChunkSize += 1; // increase chunk size to speed up
      }
    }

    currentIndex += currentChunkSize;
  }

  return chunkResults;
};
