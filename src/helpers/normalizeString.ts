import { cleanSpaces } from "./cleanSpaces";

export const normalizeString = (str: string): string => {
  return cleanSpaces(str)
    .normalize("NFD") // split letters and diacritics
    .replace(/[\u0300-\u036f]/g, "") // remove diacritical marks
    .toLowerCase(); // lowercase
};
