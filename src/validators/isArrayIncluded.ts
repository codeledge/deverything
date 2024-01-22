export const isArrayIncluded = <T>(arr1: T[], arr2: T[]): boolean => {
  return arr1.every((value) => arr2.includes(value));
};
