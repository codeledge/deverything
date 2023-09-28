/**
 * Print or log helper that does not break on circular references, and expands nested objects.
 */
export const dir = (arg: any, depth = 5): void => {
  console.dir(arg, { depth });
};
