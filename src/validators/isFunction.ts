export const isFunction = (arg: any): arg is Function =>
  Object.prototype.toString.call(arg) === "[object Function]";
