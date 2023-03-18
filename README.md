<img width="273" alt="Screenshot 2023-03-18 at 18 45 28 copy" src="https://user-images.githubusercontent.com/4820803/226130021-988b51db-9ddb-4f07-b227-1ee42ae65f70.png">


## Everything you constantly need for development (and probably still copy-pasting from other projects)

The promise:

- **1️ package**: say goodbye to lodash, faker, this and that and the other package.
- **0️ dependencies**: keep it simple and lightweight.
- **🏆 Pick the best**: the code is minimal and uses the best current practices and is optimized for max performance.
- **👪🏼 Typescript**: use it, support it and export it.
- **🌊 Intuitive**: favour always the most intuitive API and common usage, _never_ throw errors unless asked.
- **🙈 Semantic**: use simple function names that are easy to remember, no complicated options.

Contributions always welcome!

### Validators

- `isArray()`
- `isBoolean()`
- `isBrowser()` to detect if you are on the browser
- `isClient()` to detect if you are ont the browser/client
- `isEmail()` this is a relaxed check, use your own validation if you need to be strict
- `isEmpty()` to check for empty object, empty array, empty string, null or undefined
  - `isEmptyString()` trims the string and checks if something is left
  - `isEmptyArray()`
  - `isEmptyObject()`
- `isFunction()`
- `isJsDate()` if it's a **valid** javascript's Date
- `isNumber()` if the arg is number, and also usable (no infinity)
  - `isInt()`
  - `isEven()`
  - `isOdd()`
  - `isPositive()`
  - `isNegative()`
- `isObject()` if it's a js plain Object
- `isServer()` if you are on the server
- `isString()`
  - `isStringDate()` also checks if the string passed is a **valid** date
- `isURL()`
- `isUUID()`

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
  - `randomDateRange()` => { startDate, endDate }
- `randomEmail()`
- `randomInt()`
- `randomName()`
  - `randomFirstName()`
  - `randomLastName()`
  - `randomFullName()`
- `randomHandle()` useful for social identifiers, or slugs

### TypeScript Helpers

- `Maybe`
- `MaybePromise`
- `MaybePromiseOrValue`
- `MaybePromiseOrValueArray`
- `DateLike`
- `NonUndefined`

## Development

After changes, run

```
pnpm changeset
```

then

```
pnpm changeset version
```

To bump the version. CI will take care of publishing the package when merged.
