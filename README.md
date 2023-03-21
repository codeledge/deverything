<img width="393" alt="Screenshot 2023-03-18 at 19 06 18" src="https://user-images.githubusercontent.com/4820803/226131139-740d5fd7-26e5-4555-95fb-14745e145b85.png">

## Everything you constantly need for development (and probably still copy-pasting from other projects)

The promise:

- **✅ 1 package**: say goodbye to lodash, faker, this and that and the other package.
- **⭕ 0 dependencies**: keep it simple and lightweight.
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
- `isKeyOfObject()`
- `isNumber()` if the arg is number, and also usable (no infinity)
  - `isInt()`
  - `isEven()`
  - `isOdd()`
  - `isPositive()`
  - `isNegative()`
- `isNumeric()`
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
- `randomCoords()`
  - `randomLat()`
  - `randomLng()`
- `randomDate()`
  - `randomFutureDate()`
  - `randomPastDate()`
  - `randomDateRange()` => { startDate, endDate }
- `randomEmail()`
- `randomEmoji()`
- `randomEnumValue()`
- `randomFile()`
- `randomFloat()`
- `randomHandle()` useful for social identifiers, or slugs
- `randomHexColor()`
- `randomHexValue()`
- `randomInt()`
  - `randomPositiveInt()` > 0
  - `randomNegativeInt()` < 0
  - `randomMaxSafeInt()` Range of very BIG integers, which are still safe to use tho
  - `randomMaxInt()` Range within the Maximum integer supported by js
- `randomName()`
  - `randomFirstName()`
  - `randomLastName()`
  - `randomFullName()`
- `randomParagraph()`
- `randomWord()`

### TypeScript Helpers

- `Coords`
- `DateLike`
- `Maybe`
- `MaybePromise`
- `MaybePromiseOrValue`
- `MaybePromiseOrValueArray`
- `NonUndefined`
- `ObjectValues`

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
