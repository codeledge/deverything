export const isObject = (arg: any): arg is object =>
  Object.prototype.toString.call(arg) === "[object Object]";
