import curry from 'lib/fp/curry'

// prettier-ignore
const propOr = curry(
  (key, fallback, obj) => obj[key] || fallback
)

export default propOr
