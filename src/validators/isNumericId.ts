export const isNumericId = (id: string): boolean =>
  /^\d+$/.test(id) && parseInt(id) > 0;
