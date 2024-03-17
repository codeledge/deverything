import { chunkArray } from "./chunkArray";

/**
 * @description Run a series of (async) functions in order and return the results
 * @param array
 * @param chunkSize
 * @param fn
 *
 */
export const chunkedAsync = async <T>(
  array: T[],
  chunkSize: number,
  fn: (chunk: T[], chunkIndex: number, chunks: T[][]) => Promise<any>
): Promise<any[]> => {
  const chunkResults: any[] = [];

  const chunks = chunkArray(array, chunkSize);
  for (const [chunkIndex, chunk] of chunks.entries()) {
    const chunkResult = await fn(chunk, chunkIndex, chunks);
    chunkResults.push(chunkResult);
  }

  return chunkResults;
};
