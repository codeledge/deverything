import { chunkArray } from "./chunkArray";

export const chunkedAll = async <T>(
  array: T[],
  chunkSize: number,
  fn: (chunk: T[]) => Promise<any>
): Promise<any[]> => {
  const chunks = chunkArray(array, chunkSize);
  return await Promise.all(chunks.map(fn));
};
