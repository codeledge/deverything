/**
 * Counts the number of decimal places in a number.
 * @example
 * countDecimalPlaces(1.23); // 2
 * countDecimalPlaces(1.234567); // 6
 * countDecimalPlaces(5); // 0
 * countDecimalPlaces(0.1); // 1
 */
export const countDecimalPlaces = (num: number): number => {
  if (!Number.isFinite(num)) return 0;

  const numStr = num.toString();

  // Handle scientific notation
  if (numStr.includes("e")) {
    const [, exponent] = numStr.split("e");
    const exp = parseInt(exponent, 10);
    const [base] = numStr.split("e");
    const basePlaces = base.includes(".") ? base.split(".")[1].length : 0;
    return Math.max(0, basePlaces - exp);
  }

  // Handle regular decimal notation
  if (!numStr.includes(".")) return 0;

  return numStr.split(".")[1].length;
};
