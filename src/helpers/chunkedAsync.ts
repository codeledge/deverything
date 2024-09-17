import { chunkArray } from "./chunkArray";
import { sleep } from "./sleep";

/**
 * @description Run a series of (async) functions in order and return the results
 * @param array
 * @param chunkSize
 * @param fn
 * @param options.minChunkTimeMs - Minimum time to process each chunk
 */
export const chunkedAsync = async <T>(
  array: T[],
  chunkSize: number,
  fn: (chunk: T[], chunkIndex: number, chunks: T[][]) => Promise<any>,
  {
    minChunkTimeMs,
  }: {
    minChunkTimeMs?: number;
  } = {}
): Promise<any[]> => {
  const chunkResults: any[] = [];

  const chunks = chunkArray(array, chunkSize);
  for (const [chunkIndex, chunk] of chunks.entries()) {
    const start = performance.now();
    const chunkResult = await fn(chunk, chunkIndex, chunks);
    chunkResults.push(chunkResult);
    if (minChunkTimeMs) {
      const duration = performance.now() - start;
      if (duration < minChunkTimeMs) {
        await sleep(minChunkTimeMs - duration);
      }
    }
  }

  return chunkResults;
};
