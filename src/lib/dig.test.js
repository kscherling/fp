import dig from './dig'

const diggable = {
  a: {
    b: {
      c: 'string',
      d: {},
      e: []
    }
  }
}

test('returns digged value', () => {
  const result = dig('a.b.c', diggable)

  expect(result).toEqual('string')
})

test('does not error if undefined', () => {
  const result = dig('nope.b.c', diggable)

  expect(result).toEqual(undefined)
})

test('does not error if too deep', () => {
  const result = dig('a.b.c.d', diggable)

  expect(result).toEqual(undefined)
})

test('empty object values return `undefined`', () => {
  const result = dig('a.b.d', diggable)

  expect(result).toEqual(undefined)
})

test('empty array values return `undefined`', () => {
  const result = dig('a.b.e', diggable)

  expect(result).toEqual(undefined)
})
