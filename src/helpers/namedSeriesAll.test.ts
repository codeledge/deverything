import { describe, expect, test } from '@jest/globals'
import { namedSeriesAll } from './namedSeriesAll'
import { sleep } from './sleep'

describe('namedSeriesAll', () => {
  test('simple', async () => {
    expect(
      await namedSeriesAll({
        a: Promise.resolve(true),
        b: sleep(1).then(() => 42),
        c: () => Promise.resolve('foo'),
        d: async () => [69],
        e: async () => {
          await sleep(1)
          return null
        },
        f: async () => {
          return sleep(1).then(() => {})
        },
      }),
    ).toStrictEqual({
      a: true,
      b: 42,
      c: 'foo',
      d: [69],
      e: null,
      f: undefined,
    })
  })

  test('throw new Error', () => {
    expect(
      namedSeriesAll({
        first: () => {
          throw new Error('1')
        },
        second: () => {
          throw new Error('2')
        },
      }),
    ).rejects.toThrowError('1')
  })

  test('Promise.reject', () => {
    expect(
      namedSeriesAll({
        first: Promise.reject('3'),
        second: () => Promise.reject('4'),
      }),
    ).rejects.toEqual('3')
  })
})
