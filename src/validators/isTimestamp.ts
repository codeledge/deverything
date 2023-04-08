import { isJsDate } from "./isJsDate";

export const isTimestamp = (arg: number): boolean => {
  const date = new Date(arg);
  return isJsDate(date);
};
