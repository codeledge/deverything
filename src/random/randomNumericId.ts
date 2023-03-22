let id = 1; // don't start with 0, to be closer to SQL autoincrement

export const randomNumericId = () => {
  return id++;
};
