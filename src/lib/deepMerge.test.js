import deepMerge from './deepMerge'

test('is idempotent', () => {
  const a = { a: { a: 'a' } }
  const b = { a: { b: 'b' } }

  const result = deepMerge(a, b)

  expect(result).not.toBe(a)
  expect(result).not.toBe(b)
})

test('merges deeply nested objects', () => {
  expect(
    deepMerge(
      {
        a: {
          a: {
            a: 'a'
          },
          b: 'b'
        }
      },
      {
        a: {
          a: {
            b: 'b'
          }
        }
      }
    )
  ).toEqual({
    a: {
      a: {
        a: 'a',
        b: 'b'
      },
      b: 'b'
    }
  })
})

test('is order independent', () => {
  expect(
    deepMerge(
      {
        a: {
          a: {
            b: 'b'
          }
        }
      },
      {
        a: {
          a: {
            a: 'a'
          }
        }
      }
    )
  ).toEqual({
    a: {
      a: {
        a: 'a',
        b: 'b'
      }
    }
  })
})

test('replaces duplicate values', () => {
  expect(
    deepMerge(
      {
        a: {
          a: {
            a: 'a'
          }
        }
      },
      {
        a: {
          a: {
            a: 'b'
          }
        }
      }
    )
  ).toEqual({
    a: {
      a: {
        a: 'b'
      }
    }
  })
})
