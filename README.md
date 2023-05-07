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
- ⭐ `isEmpty()` to check for empty object, empty array, empty string, null or undefined
  - `isEmptyString()` trims the string and checks if something is left
  - `isEmptyArray()`
  - `isEmptyObject()`
- `isFunction()`
- `isJsDate()` if it's a **valid** javascript's Date
  - `isFutureDate()`
  - `isPastDate()`
  - `isTimestamp()`
  - `isStringDate()` also checks if the string passed is a **valid** date
- `isKey()` is a real key of an object
- `isNumber()` if the arg is number, and also usable (no infinity)
  - `isInt()`
  - `isEven()`
  - `isOdd()`
  - `isPositive()`
  - `isNegative()`
- `isNumeric()`
- ⭐ `isObject()` if it's a js plain Object
- `isPromise()`
- `isPWA()`
- `isReactElement()`
- `isRegExp()`
- ⭐ `isSame()` Compare if dates, functions, arrays, objects or anything else are the same
- `isServer()` if you are on the server
- `isString()`
- `isURL()`
- `isUUID()`

### Helpers

- `array()` create an arbitrary array based on a function
  - `arrayDiff()`
  - `arrayIntersection()`
- `capitalize()` word => Word
- `cleanSpaces()` trims and turns double spaces into single space
- `clamp()` clamp number in a range
- `first()` get the first element of an array
- `getKeys()` get the keys of an object, includes symbols
- `last()` get the last element of an array
- ⭐ `merge()` deep merge objects
- `moveToFirst()` move array element to first
- `moveToLast()` move array element to last
- `objectDiff()`
- ⭐ `parseDate()` pass anything Date-Like, and get a JS Date back
- `pretty()`
- `promiseWithTimeout()`takes a promise, a timeoutMs, and an option error as arguments. Returns a new Promise that either resolves with the value of the input promise or rejects with the provided error or a default error message if the input promise does not resolve or reject within the specified timeoutMs.
- `sleep()`
- `toggleArray()`
- `truncate()` truncate text, does not break emojis
- `uniqueValues()`

### Random data generators

These functions are optimized for low entropy random data generation useful for Unit Testing, Storybook, Pass real validations, Reverse hacking, Penetration testing...

- `randomAddress()`
- `randomAlphaNumericCode()`
- ⭐ `randomArrayItem()`
- `randomBankAccount()`
- `randomBool()`
- ⭐ `randomCoords()`
  - `randomLat()`
  - `randomLng()`
- `randomDate()` a safe range in decade
  - `randomMaxDate()` a range in the Max dates allowed by JS
  - `randomFutureDate()`
  - `randomPastDate()`
  - `randomDateRange()` => { startDate, endDate }
- `randomEmail()`
- `randomEmoji()`
- `randomEnumKey()` enum FRUIT { APPLE, PEAR } => APPLE
- `randomEnumValue()` enum FRUIT { APPLE = 1, PEAR = 3 } => 3
- `randomFile()`
- `randomFloat()`
- `randomHandle()` useful for social identifiers, or slugs
- `randomHexColor()`
- `randomHexValue()`
- `randomHtmlColorName()`
- `randomIBAN()`
- `randomInt()`
  - `randomPositiveInt()` > 0
  - `randomNegativeInt()` < 0
  - `randomMaxSafeInt()` Range of very BIG integers, which are still safe to use tho
  - `randomMaxInt()` Range within the Maximum integer supported by js
- `randomIP()`
- `randomName()`
  - `randomFirstName()`
  - `randomLastName()`
  - `randomFullName()`
- `randomNumericCode()`
- `randomNumericId()` autoincremental process-unique id
- `randomParagraph()`
- `randomPassword()`
- `randomUUID()` lightweight uuid generation, passing UUID validation
- `randomWord()`

### TypeScript Helpers

- `Coords`
- `DateLike`
- `Dimensions`
- `Maybe`
  - `MaybePromise`
  - `MaybePromiseOrValue`
  - `MaybePromiseOrValueArray`
- `NonUndefined`
- `ObjectValues`
- `PlainObject`
- `Point`
- `PrismaSelect`

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
