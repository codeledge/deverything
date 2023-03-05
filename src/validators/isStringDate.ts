import { isJsDate } from "./isJsDate";

export const isStringDate = (arg: string) => {
  const date = new Date(arg);
  return isJsDate(date);
};
