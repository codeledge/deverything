export const moveToIndex = <T>(
  items: T[],
  itemToMoveIndex: number,
  destinationIndex: number
): T[] => {
  if (!items.length) return items;

  if (itemToMoveIndex > items.length || destinationIndex > items.length)
    throw new Error("index should be smaller then array length");

  const newArray = [...items];
  const [removedItem] = newArray.splice(itemToMoveIndex, 1);
  newArray.splice(destinationIndex, 0, removedItem);
  return newArray;
};
