---
"deverything": minor
---

Fix and tighten five helpers:

- `extractEmailDomain` splits on the last `@` (a quoted local part may contain one), and trims and lowercases the domain.
- `isEmail` must match the whole string: it used to accept any string containing an address, such as `"hello user@example.com"`. It now takes any value and is a type guard (`arg is string`).
- `chunkArray` takes a readonly array and throws a `RangeError` for a size that is not a positive integer, which used to loop forever.
- `clamp` no longer throws a `ReferenceError` where there is no `process` global (browsers) when `max < min`.
- `groupByKey` is typed as a record keyed by the key's values (it was keyed by the item's keys) and takes a readonly array; `omit` returns `Omit<T, K>` instead of `Partial<T>` and takes a readonly key list.
