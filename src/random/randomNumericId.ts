let id = 1; // don't start with 0, to be closer to SQL autoincrement

/**
 * @deprecated use incrementalId() instead, as this one is not random and could cause confusion
 */
export const randomNumericId = () => {
  return id++;
};
