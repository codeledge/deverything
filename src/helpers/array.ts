export const array = <U extends (...args: any) => any>(
  length: number,
  mapFn: U
): ReturnType<U>[] => {
  return Array.from({ length }, mapFn);
};
