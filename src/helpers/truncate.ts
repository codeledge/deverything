import { isPositiveInt } from "../validators/isNumber";

export const truncate = (arg: string, limit: number, ellipsis = "...") => {
  if (!isPositiveInt(limit)) return arg;

  const argArray = [...arg]; // convert string to array, emoji and unicode safe

  if (argArray.length <= limit) return arg;

  return argArray.slice(0, limit).join("") + ellipsis;
};
