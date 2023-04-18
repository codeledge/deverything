export const isObject = <T>(arg?: any): arg is Record<string, T> =>
  Object.prototype.toString.call(arg) === "[object Object]";
