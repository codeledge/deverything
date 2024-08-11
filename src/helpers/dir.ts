/**
 * Print or log helper that does not break on circular references, and expands nested objects.
 */
export const dir = (
  arg: any,
  { maxDepth = 5 }: { maxDepth?: number } = {}
): void => {
  console.dir(arg, { depth: maxDepth });
};
