# DEVerything

## Everything you constantly need for development (and probably still copy-pasting from other projects)

The promise:

- **1️⃣ package**: say goodbye to lodash, faker, this and that and the other package.
- **0️⃣ dependencies**: keep it simple and lightweight.
- **🏆 Pick the best**: the code is minimal and uses the best current practices and is optimized for max performance.
- **👪🏼 Typescript**: use it, support it and export it.
- **🌊 Intuitive**: favour always the most intuitive API and common usage, _never_ throw errors unless asked.
- **🙈 Semantic**: use simple function names that are easy to remember, no complicated options.

Contributions always welcome!

### Validators

- `isArray()` if the argument is an array
- `isBrowser()` to detect if you are on the browser
- `isClient()` to detect if you are ont the browser/client
- `isEmpty()` to check for empty object, empty array, empty string, null or undefined
- `isJsDate()` if it's a **valid** javascript's Date
- `isObject()` if it's a js Object
- `isServer()` if you are on the server
- `isStringDate()` if the string passed is a **valid** date

### Helpers

- `array()` create an arbitrary array based on a function
- `first()` get the first element of an array
- `last()` get the last element of an array
- `moveToFirst()` move array element to first
- `moveToLast()` move array element to last
- `parseDate()` pass anything Date-Like, and get a JS Date back

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

### TypeScript Helpers

- `Maybe`
- `MaybePromise`
- `MaybePromiseOrValue`
- `MaybePromiseOrValueArray`
- `DateLike`
- `NonUndefined`
