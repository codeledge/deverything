export const randomInt = ({
  min = -100,
  max = 100,
}: {
  min?: number;
  max?: number;
} = {}): number => {
  min = Math.ceil(min); // in case is a float
  max = Math.floor(max); // in case is a float
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomPositiveInt = ({
  min = 1,
  max,
}: {
  min?: number;
  max?: number;
} = {}): number =>
  randomInt({
    min,
    max,
  });

export const randomNegativeInt = ({
  min,
  max = -1,
}: {
  min?: number;
  max?: number;
} = {}): number =>
  randomInt({
    min,
    max,
  });

export const randomMaxSafeInt = () =>
  randomInt({ min: -Number.MAX_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER });

export const randomMaxInt = () =>
  randomInt({ min: -Number.MAX_VALUE, max: Number.MAX_VALUE });

export const randomFormattedPercentage = () => randomInt() + "%";
