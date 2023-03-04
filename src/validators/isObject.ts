export const isObject = (arg: any): boolean =>
  Object.prototype.toString.call(arg) === "[object Object]";
