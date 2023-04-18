export const cleanSpaces = (str: string): string => {
  return str.trim().replace(/\s{2,}/g, " ");
};
