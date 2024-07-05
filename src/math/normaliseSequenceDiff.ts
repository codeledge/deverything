import { min } from "./min";

export const normaliseSequenceDiff = (
  sequence: number[],
  options: { startFrom?: number } = {}
): number[] => {
  const base = options?.startFrom ?? min(sequence);

  const sortedIndexes = getIndexesOfSortedArray(sequence);

  return sortedIndexes.reduce((diffArray, sortedIndex, index) => {
    diffArray[sortedIndex] = base + index - sequence[sortedIndex];
    return diffArray;
  }, [] as number[]);
};

const getIndexesOfSortedArray = (arr: number[]): number[] => {
  // Create an array of indexes
  const indexes = arr.map((_, index) => index);

  // Sort the indexes based on the corresponding values in the original array
  indexes.sort((a, b) => (arr[a] < arr[b] ? -1 : arr[a] > arr[b] ? 1 : 0));

  return indexes;
};
