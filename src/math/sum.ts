import { PropertyAccessor, getProp } from "../_internals/getProp";
import { PlainObject } from "../types";

export const sum = (numbers: number[]) => {
  return numbers.reduce((total, num) => total + num, 0);
};

export const sumBy = <T extends PlainObject>(
  items: T[],
  prop: PropertyAccessor<T>
) => {
  return items.reduce((total, item) => total + getProp<T>(item, prop), 0);
};
