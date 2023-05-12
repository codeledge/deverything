export const moveToIndex = <T>(
  items: T[],
  itemToMoveIndex: number,
  destinationIndex: number
): T[] => {
  if (!items.length || itemToMoveIndex > items.length || destinationIndex > items.length)
    return items;

  const newArray = [...items];
  const [removedItem] = newArray.splice(itemToMoveIndex, 1);
  newArray.splice(destinationIndex, 0, removedItem);
  return newArray;
};
