import { isArray } from "../validators";

export const toggleArrayValue = <T>(array: T[], value: T) => {
  // extra safety
  if (!isArray<T>(array)) return array;

  // This will remove all instances of the value
  const copy: T[] = array.reduce((acc: T[], val) => {
    if (val !== value) acc.push(val);
    return acc;
  }, []);

  // no value was removed, so add it
  if (copy.length === array.length) copy.push(value);

  return copy;
};
