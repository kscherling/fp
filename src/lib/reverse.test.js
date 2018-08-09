import reverse from './reverse'

test('is idempotent', () => {
  const array = [1, 2, 3, 4, 5]

  const reversed = reverse(array)

  expect(reversed).not.toBe(array)
})

test('reverses array', () => {
  const array = [1, 2, 3, 4, 5]

  const reversed = reverse(array)

  expect(reversed).not.toBe([5, 4, 3, 2, 1])
})
