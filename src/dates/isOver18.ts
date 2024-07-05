import { parseDate } from "../helpers";
import { DateLike } from "../types";

export const isOver18 = (birthDate: DateLike) => {
  const now = new Date();
  const birth = parseDate(birthDate);
  if (!birth) return false;

  const age = now.getFullYear() - birth.getFullYear();
  if (age > 18) return true;
  if (age < 18) return false;
  if (age === 18) {
    if (now.getMonth() > birth.getMonth()) return true;
    if (now.getMonth() < birth.getMonth()) return false;
    if (now.getMonth() === birth.getMonth()) {
      if (now.getDate() >= birth.getDate()) return true;
      if (now.getDate() < birth.getDate()) return false;
    }
  }
  return false;
};
