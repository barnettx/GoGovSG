import { numberUnitFormatter } from '../../../src/client/util/format'

describe('ones, tens, hundreds are not formatted', () => {
  test('one is 1', () => {
    const valueToTest = 1
    expect(numberUnitFormatter(valueToTest)).toBe('1')
  })
  test('ten is 10', () => {
    const valueToTest = 10
    expect(numberUnitFormatter(valueToTest)).toBe('10')
  })
  test('hundred is 100', () => {
    const valueToTest = 100
    expect(numberUnitFormatter(valueToTest)).toBe('100')
  })
  test('hundreds does not round up to thousands', () => {
    const valueToTest = 999
    expect(numberUnitFormatter(valueToTest)).toBe('999')
  })
})

describe('thousands are formatted with k', () => {
  test('a thousand is 1k', () => {
    const valueToTest = 1_000
    expect(numberUnitFormatter(valueToTest)).toBe('1k')
  })
  test('thousands does not round up', () => {
    const valueToTest = 1_999
    expect(numberUnitFormatter(valueToTest)).toBe('1k')
  })
  test('thousands does not round up to millions', () => {
    const valueToTest = 999_999
    expect(numberUnitFormatter(valueToTest)).toBe('999k')
  })
})

describe('millions are formatted with m', () => {
  test('a million is 1m', () => {
    const valueToTest = 1_000_000
    expect(numberUnitFormatter(valueToTest)).toBe('1m')
  })
  test('millions does not round up', () => {
    const valueToTest = 1_999_999
    expect(numberUnitFormatter(valueToTest)).toBe('1m')
  })
  test('millions does not round up to billions', () => {
    const valueToTest = 999_999_999
    expect(numberUnitFormatter(valueToTest)).toBe('999m')
  })
})

describe('billions are formatted with b', () => {
  test('a billions is 1b', () => {
    const valueToTest = 1_000_000_000
    expect(numberUnitFormatter(valueToTest)).toBe('1b')
  })
  test('billions does not round up', () => {
    const valueToTest = 1_999_999_999
    expect(numberUnitFormatter(valueToTest)).toBe('1b')
  })
  test('billions does not round up to trillions', () => {
    const valueToTest = 999_999_999_999
    expect(numberUnitFormatter(valueToTest)).toBe('999b')
  })
})