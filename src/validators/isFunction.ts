/**
 * @returns true if the argument can be called like a function -> fn() or await fn()
 */
export const isFunction = (arg?: any): arg is Function => {
  const type = Object.prototype.toString.call(arg);
  return type === "[object Function]" || type === "[object AsyncFunction]";
};
