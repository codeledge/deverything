import { isString } from "./isString";

export const isEmail = (arg: string) =>
  isString(arg) && /\S+@\S+\.\S+/.test(arg);
