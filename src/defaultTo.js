import curry from 'lib/fp/curry'

// prettier-ignore
const defaultTo = curry(
  (fallback, obj) => obj || fallback
)

export default defaultTo
