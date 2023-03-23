module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: ["alloy", "alloy/typescript"],
  plugins: ["sort-imports-es6-autofix", "import"],
  rules: {
    "no-unreachable": 1,
  },
};
