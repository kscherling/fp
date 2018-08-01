import curry from './curry'

// prettier-ignore
const split = curry(
  (pattern, string) => string.split(pattern)
)

export default split
