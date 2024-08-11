import { randomString } from "./randomString";

export const randomSymbol = () => {
  return Symbol(randomString());
};
