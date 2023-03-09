# DEVerything

## Everything you constantly need for dev (and probably still copy-pasting)

The promise:

- **1 package**: say goodbye to installing lodash, faker, this and that and the other one.
- **0 dependencies**: keep it simple and lightweight.
- **Pick the best**: the code is minimal and uses the best current practices and performance.
- **Typescript**: use it, support it and export it.
- **Intuitive**: favour always the most intuitive API, don't throw errors unless asked.

Contributions always welcome!

### Validators

- `isBrowser()`
- `isClient()`
- `isEmpty()`
- `isJsDate()`
- `isObject()`
- `isServer()`
- `isStringDate()`

### Helpers

- `array()`
- `first()`
- `last()`
- `moveToFirst()`
- `moveToLast()`
- `parseDate()`

### Random data generators

These functions are optimized for low entropy random data generation useful for Unit Testing, Storybook, Pass real validations, Reverse hacking, Penetration testing...

- `randomAddress()`
- `randomArrayItem()`
- `randomBool()`
- `randomDate()`
  - `randomFutureDate()`
  - `randomPastDate()`
- `randomEmail()`
- `randomInt()`
- `randomName()`
  - `randomFirstName()`
  - `randomLastName()`
  - `randomFullName()`
  - `randomHandle()`
