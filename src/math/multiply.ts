export const multiply = (numbers: number[]) => {
  return numbers.reduce((total, num) => total * num, 1);
};
