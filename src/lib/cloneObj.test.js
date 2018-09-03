import cloneObj from './cloneObj'

test('is idempotent', () => {
  const obj = { a: { b: { c: {} } } }
  const clone = cloneObj(obj)

  expect(obj).not.toBe(clone)
  expect(obj).toEqual(clone)
})
