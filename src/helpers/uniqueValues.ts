export const uniqueValues = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};
