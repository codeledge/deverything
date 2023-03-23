export const isKey = <T extends object>(
  key: string | number | symbol,
  obj: T
): key is keyof T =>
  obj.hasOwnProperty(key) && // makes sure the prop is not in the prototype chain
  obj.propertyIsEnumerable(key); // makes sure the prop is not a getter/setter
