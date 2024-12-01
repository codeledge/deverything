/**
 * Check if an array of numbers is a sequence
 * @example
 *  [1,2,3] = true
 *  [0,1,2] = false (starts at 0) TODO: add option to start from different number
 *  [1,3,4] = false (the sequence is not continuous, has gaps)
 *  [1,1,2] = false (has repeated values)
 */
export const isSequence = (numbers: number[]) => {
  if (numbers.length < 2) return true;
  if (numbers[0] !== 1) return false; // Opinionated on 1-based index, to avoid the 0 falsy issue, TODO: add option to start from different number
  return numbers
    .slice(1) // skip first element
    .every((number, index) => {
      return number === numbers[index - 1] + 1;
    });
};
