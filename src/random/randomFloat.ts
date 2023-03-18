// TODO: with big numbers there will be less digits
export const randomFloat = (
  min: number = -9,
  max: number = 9,
  decimals?: number // Max js digits is theoretically 17, but is actually 16
) => {
  const float = Math.random() * (max - min) + min;

  if (decimals) return parseFloat(float.toFixed(decimals));

  return float;
};

// TODO: randomBigFloat
