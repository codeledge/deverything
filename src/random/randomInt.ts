export const randomInt = (min: number = -100, max: number = 100): number => {
  min = Math.ceil(min); // in case is a float
  max = Math.floor(max); // in case is a float
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomPositiveInt = (max: number = 100): number =>
  randomInt(1, max);

export const randomNegativeInt = (min: number = -100): number =>
  randomInt(min, -1);

export const randomMaxSafeInt = () =>
  randomInt(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

export const randomMaxInt = () =>
  randomInt(-Number.MAX_VALUE, Number.MAX_VALUE);

export const randomPercentage = ({
  min,
  max,
}: {
  min?: number;
  max?: number;
} = {}) => randomInt(min ?? -100, max ?? 100);

export const randomPositivePercentage = ({
  min,
  max,
}: {
  min?: number;
  max?: number;
} = {}) => randomInt(min ?? 1, max ?? 100);

export const randomFormattedPercentage = () => randomPercentage() + "%";
