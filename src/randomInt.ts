export const randomInt = (
  start: number = Number.MIN_VALUE,
  end: number = Number.MAX_VALUE
): number => Math.floor(Math.random() * (end - start + 1) + start);
