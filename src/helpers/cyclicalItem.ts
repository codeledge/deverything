/**
 * @returns element from array at index, if index is greater than array length, it will loop back to the start of the array
 */
export const cyclicalItem = <T>(array: T[], index: number): T => {
  return array[index % array.length];
};
