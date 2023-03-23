export const isFunction = (arg: any) =>
  Object.prototype.toString.call(arg) === "[object Function]";
