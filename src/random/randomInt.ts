export const randomInt = (start: number = -100, end: number = 100): number =>
  Math.floor(Math.random() * (end - start + 1) + start);

export const randomPositiveInt = (end: number = 100): number =>
  randomInt(1, end);

export const randomNegativeInt = (start: number = -100): number =>
  randomInt(start, -1);

export const randomMaxSafeInt = () =>
  randomInt(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

export const randomMaxInt = () =>
  randomInt(-Number.MAX_VALUE, Number.MAX_VALUE);

export const randomPercentage = () => randomInt(-100, 100);
