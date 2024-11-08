import { clamp } from "./clamp";
import { sleep } from "./sleep";

/**
 * @description Run a series of (async) functions with dynamic chunk sizes
 * @param array - Array to chunk
 * @param initialChunkSize - Size of initial chunk
 * @param fn - Function to run on each chunk
 * @param options.idealChunkDuration - Ideal time to process each chunk, the chunk size will adjust to meet this duration
 * @param options.maxChunkSize - Maximum chunk size (default 200)
 * @param options.minChunkDuration - Minimum time to process each chunk (useful for rate limiting)
 * @param options.minChunkSize - Minimum chunk size (default 1)
 * @param options.sleepTimeMs - Time to sleep between each chunk
 */
export const chunkedDynamic = async <T>(
  array: T[],
  initialChunkSize: number,
  fn: (chunk: T[], currentChunkIndex: number) => Promise<any>,
  {
    idealChunkDuration,
    maxChunkSize,
    minChunkDuration,
    minChunkSize,
    sleepTimeMs,
  }: {
    idealChunkDuration?: number;
    maxChunkSize?: number;
    minChunkDuration?: number;
    minChunkSize?: number;
    sleepTimeMs?: number;
  } = {}
): Promise<any[]> => {
  const chunkResults: any[] = [];

  let currentIndex = 0;
  let chunkIndex = 0;
  let currentChunkSize = initialChunkSize;

  while (currentIndex < array.length) {
    const start = performance.now();
    const chunk = array.slice(currentIndex, currentIndex + currentChunkSize);
    // update pointer before currentChunkSize is updated
    currentIndex += currentChunkSize;
    const chunkResult = await fn(chunk, chunkIndex);
    // update chunk index after processing
    chunkIndex += 1;
    chunkResults.push(chunkResult);
    if (sleepTimeMs) await sleep(sleepTimeMs);
    if (idealChunkDuration) {
      const duration = performance.now() - start;
      currentChunkSize = clamp({
        number: Math.round(currentChunkSize * (idealChunkDuration / duration)),
        min: minChunkSize || 1,
        max: maxChunkSize || 200,
      });
    }
    if (minChunkDuration) {
      const duration = performance.now() - start;
      if (duration < minChunkDuration) {
        await sleep(minChunkDuration - duration);
      }
    }
  }

  return chunkResults;
};
