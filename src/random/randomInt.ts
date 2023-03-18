export const randomInt = (start: number = -100, end: number = 100): number =>
  Math.floor(Math.random() * (end - start + 1) + start);

export const randomMaxSafeInt = () =>
  randomInt(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

export const randomMaxInt = () =>
  randomInt(-Number.MAX_VALUE, Number.MAX_VALUE);
