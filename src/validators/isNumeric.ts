export const isNumeric = (num: number | string): boolean => {
  return !isNaN(num as number); // isNaN DOES actually work with string-numbers!
};
