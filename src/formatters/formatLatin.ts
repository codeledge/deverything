/**
 *
 * @deprecated This is still WIP
 */
export const formatLatin = (text: string): string => {
  let normalized = text.normalize("NFKD");
  return normalized;
};
