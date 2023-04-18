import { isArray } from "../validators";

export const toggleArray = <T>(arg: T[], value: T) => {
  if (isArray<T>(arg)) {
    const copy: T[] = arg.reduce((acc: T[], val) => {
      if (val !== value) acc.push(val);
      return acc;
    }, []);
    if (copy.length === arg.length) copy.push(value);
    return copy;
  }

  return arg;
};
