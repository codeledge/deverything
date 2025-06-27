/**
 * Returns the maximum value in an array of numbers.
 * @param values - The array of numbers to find the maximum value of.
 * @returns The maximum value in the array. If the array is empty, returns 0.
 */
export const max = (values: number[]): number => {
  if (!values.length) {
    return 0;
  }
  const maxValue = Math.max(...values);
  return maxValue;
};
