export const getKeys = (arg: object) => {
  return Object.keys(arg).concat(getEnumerableOwnPropertySymbols(arg));
};

// Object.keys does not return enumerable symbols
export const getEnumerableOwnPropertySymbols = (arg: object): any[] => {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(arg).filter(function (symbol) {
        return Object.propertyIsEnumerable.call(arg, symbol);
      })
    : [];
};
