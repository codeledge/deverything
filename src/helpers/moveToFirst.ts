export const moveToFirst = <T>(
  items: T[],
  condition: (item: T, i: number, items: T[]) => boolean
): T[] => {
  const resortedItems = [...items];
  for (let i = 0; i < resortedItems.length; i++) {
    if (condition(resortedItems[i], i, resortedItems)) {
      let firstItem = resortedItems.splice(i, 1);
      resortedItems.unshift(firstItem[0]);
      break;
    }
  }
  return resortedItems;
};
