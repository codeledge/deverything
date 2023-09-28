export const PRIMITIVES_OBJECT = {
  str: "string",
  num: 0,
  obj: { foo: "foo" },
  arr: [1, 2, 3],
  bool: true,
  nil: null,
  undef: undefined,
  exp: 1e13,
  inf: Infinity,
  date: new Date("Thu, 28 Apr 2016 22:02:17 GMT"),
  map: new Map([["hello", "world"]]),
  set: new Set([123, 456]),
  void: void 0,
  fn: () => {
    return void 0;
  },
  re: /([^\s]+)/g,
  bigInt: BigInt(10),
};
