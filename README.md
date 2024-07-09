<img width="393" alt="Screenshot 2023-03-18 at 19 06 18" src="https://user-images.githubusercontent.com/4820803/226131139-740d5fd7-26e5-4555-95fb-14745e145b85.png">

## Everything you constantly need for development (and probably still copy-pasting from other projects)

The promise:

- **✅ 1 package**: say goodbye to lodash, faker, and the other package you don't recall the name of.
- **⭕ 0 dependencies**: keep it simple and lightweight.
- **🏆 Pick the best**: the code is minimal and uses the best practices for max performance.
- **👪🏼 Typescript**: use it, support it and export it.
- **🌊 Intuitive**: favour always the most intuitive API and common usage, _never_ throw error unless asked to.
- **🙈 Semantic**: use simple function names that are easy to remember, no complicated options.

Contributions always welcome!

### Validators

- `isArray()`
- `isBoolean()`
- `isBrowser()` to detect if you are on the browser
- `isBuffer()` if it's a buffer
- `isClient()` same as isBrowser
- `isEmail()` this is a relaxed check, use your own validation if you need to be strict
- ⭐ `isEmpty()` to check for empty object, empty array, empty string, null or undefined
  - `isEmptyString()` trims the string and checks if something is left
  - `isEmptyArray()` checks if the array has no items
  - `isEmptyObject()` checks if the object has no keys
- `isFile()` if it's a file
- `isFunction()`
- `isJsDate()` if it's a **valid** javascript's Date
  - `isFutureDate()`
  - `isPastDate()`
  - `isStringDate()` also checks if the string passed is a **valid** date
- `isKey()` is a real key of an object
- `isLastIndex()` is the index is the last item of array
- `isNotEmptyString()` must have some text, checks for spaces-only
- `isNumber()` if the arg is number, and also usable (no infinity)
  - `isInt()` if it's an integer
  - `isEven()`
  - `isOdd()`
  - `isPositiveInt()`
  - `isNegativeInt()`
- `isNumeric()` if string is representing a number
- ⭐ `isObject()` if it's a js plain Object
- `isPromise()` if it's a promise
- `isPWA()` to detect if you are on a PWA
- `isReactElement()` if it's a valid React Element
- `isRegExp()` if it's a valid RegExp
- ⭐ `isSame()` Compare if dates, functions, arrays, objects or anything else are the same
- `isServer()` if you are on the server
- `isString()`
- `isURL()`
- `isUUID()` if it's a valid UUID

### Dates

- `isOver18()`
- `startOfNextMonth()`
- `startOfNextWeek()`
- `startOfThisWeek()`
- `startOfToday()`
- `startOfTomorrow()`

### Math

- `average()`
- `isBetween()`
- `isOutside()`
- `isStrictlyBetween()`
- `max()`
- `min()`
- `multiply()`
- `normaliseArray()`
- `normaliseNumber()`
- `percentageChange()`
- `sum()`

### Helpers

- `array()` create an arbitrary array based on a function
  - `arrayDiff()` get the difference of two arrays
  - `arrayIntersection()` get the intersection of two arrays
- `capitalize()` word => Word
- `cleanSpaces()` trims and turns double spaces into single space
- `clamp()` clamp number in a range
- `enumKeys()` enum FRUIT { APPLE, PEAR } => ["APPLE", "PEAR"]
- `enumValues()` enum FRUIT { APPLE = 1, PEAR = 3 } => [1, 3]
- `first()` get the first element of an array
- `firstKey()` get the first key of an object
- `firstValue()` get the first value of an object
- `getUrlSearchParam()` get URL search param
- `getUrlSearchParams()` get URL search params
- `incrementalId()` autoincremental SQL-like, process-unique numeric id
- `keysLength()` get the length of keys in an object
- `last()` get the last element of an array
- `lastIndex()` get the last index of an array
- ⭐ `merge()` deep merge objects
- `moveToFirst()` move array element to first
- `moveToIndex()` move array element to desired index
- `moveToLast()` move array element to last
- `normalizeNumber()` normalizes between 0 and 1
- `objectDiff()` get the difference between two objects
- ⭐ `parseDate()` pass anything Date-Like, and get a JS Date back
- `pretty()` stringify anything, without breaking on circular dependencies
- `promiseWithTimeout()` takes a promise, a timeoutMs, and an option error as arguments. Returns a new Promise that either resolves with the value of the input promise or rejects with the provided error or a default error message if the input promise does not resolve or reject within the specified timeoutMs.
- `scrambleText()` replace alpha chars with random chars
- `seriesAll()` executes promises in series, and returns all results
- `setObjectPath()` set a value in an object by path
- `setUrlSearchParams()` set URL search params
- `shuffle()` shuffles elements in an array
- `sleep()` promise-based sleep
- `toggleArrayValue()` remove/add value in array
- `truncate()` truncate text, does not break emojis
- `uniqueValues()` gets unique values in an array

### Formatters

- `formatCamelCase()`
- `formatNumber()` 1000 => "1,000" or "1K" or 0.112 => "11.2%"
- `formatPercentage()` 0.11 => "11%"
- `formatProgress()` => "[2/10]"
- `stringToCSSUnicode()` "hello" => "\000068\000065\00006c\00006c\00006f" use this for CSS
- `stringToUnicode()` "hello" => "\u0068\u0065\u006c\u006c\u006f"

### Random data generators

These functions are optimized for low entropy random data generation useful for Unit Testing, Storybook, Pass real validations, Reverse hacking, Penetration testing...

- `randomAddress()`
- `randomAlphaNumericCode()`
- ⭐ `randomArrayItem()` now supporting non-uniform distribution
- `randomBankAccount()`
- `randomBool()`
- `randomChar()`
- `randomCompany()`
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
- `randomObject()`
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
- `randomParagraph()`
- `randomPassword()`
- `randomPath()` /path/to/something
- `randomPhoneNumber()`
- `randomString()`
- `randomUUID()` lightweight uuid generation, passing UUID validation
- `randomValue()`
- `randomWord()`

### TypeScript Helpers & Generics

- `Coords`
- `DateLike`
- `Dimensions`
- `Maybe<>`
  - `MaybePromise<>`
  - `MaybePromiseOrValue<>`
  - `MaybePromiseOrValueArray<>`
- `NonUndefined`
- `Key`
- `ObjectKey<>`
- `ObjectKeys<>`
- `ObjectValue<>`
- `ObjectValues<>`
- `ObjectEntry<>`
- `ObjectEntries<>`
- ⭐ `PlainObject` use this instead of `Record<,>` or `extends object`, also makes sure it's not an array
- `PlainKey`
- `Point`
- `HashMap<>`
  - `BoolMap`
  - `NumberMap`
  - `StringMap`
  - `TrueMap`
- `VoidFn`

## Development

After changes, run

```
pnpm bump
```

To bump the version. CI will take care of publishing the package when merged.
