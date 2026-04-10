# Agent guidance — deverything

## Prefer `const` over `function`

Define exported helpers with **`const` and an arrow function** (or `const` + function expression) rather than a `function` declaration. Keeps style consistent and avoids hoisting surprises.

**Good**

```ts
export const parseArray = (
  str: string,
  options?: { separator?: string }
): string[] => {
  // ...
};
```

**Avoid**

```ts
export function parseArray(
  str: string,
  options?: { separator?: string }
): string[] {
  // ...
}
```

## Function parameters: options as objects

For helpers that accept configuration beyond the primary input (or where more knobs may be added later), use a single **options object** as the last argument instead of extra positional parameters.

- Defaults belong on that object (e.g. `separator` defaulting to `","`).
- Document option keys in JSDoc on the `options` parameter or per-field.

**Good**

```ts
export const parseArray = (
  str: string,
  options?: { separator?: string }
): string[] => {
  const { separator = "," } = options ?? {};
  // ...
};
```

**Avoid** (positional config — harder to extend and to call with partial overrides)

```ts
export const parseArray = (str: string, separator = ","): string[] => {
  // ...
};
```

The primary value (`str`, `id`, etc.) stays the first argument; everything else goes in `options`.
