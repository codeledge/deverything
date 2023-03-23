var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;

export const isReactElement = (value: any) => {
  return value.$$typeof === REACT_ELEMENT_TYPE;
};
