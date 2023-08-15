type Replacer = (this: any, key: string, value: any) => any;

/**
 * Stringifies objects without breaking on circular dependencies
 * @source https://github.com/moll/json-stringify-safe/blob/master/stringify.js
 */
export const objectSerializer = () => {
  const stack: any[] = [];
  const keys: string[] = [];

  const cycleReplacer: Replacer = function (_key, value) {
    if (stack[0] === value) return "[Circular ~]";
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
  };

  return function (this: any, key: string, value: any) {
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);

      // TODO: also sort keys! so it can be used for deep serialization
    } else stack.push(value);

    return value;
  };
};
