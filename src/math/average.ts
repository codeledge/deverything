/**
 * Calculates the average of a list of numbers.
 * @example
 * average([1, 2, 3, 4, 5]); // 3
 * average(1, 2, 3, 4, 5); // 3
 */
export const average = (numbers: number[]): number => {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
};
