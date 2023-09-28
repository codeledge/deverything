export const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array]; // create a new array to avoid modifying the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // swap elements
  }
  return newArray;
};
