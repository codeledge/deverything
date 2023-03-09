export const moveToLast = <T>(
  items: T[],
  condition: (item: T, i: number, items: T[]) => boolean
): T[] => {
  const resortedItems = [...items];
  for (let i = 0; i < resortedItems.length; i++) {
    if (condition(resortedItems[i], i, resortedItems)) {
      let lastItem = resortedItems.splice(i, 1)[0];
      resortedItems.push(lastItem);
      break;
    }
  }
  return resortedItems;
};
