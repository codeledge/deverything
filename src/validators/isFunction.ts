export const isFunction = (arg: any) =>
  Object.prototype.toString.call(arg) === "[object Function]";

export const isPromise = (arg: any) => arg instanceof Promise;
