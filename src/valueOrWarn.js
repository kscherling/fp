import curry from 'lib/fp/curry'
import warn from 'lib/fp/warn'

// prettier-ignore
const valueOrWarn = curry(
  (key, props, value) => value || warn(key, props)
)

export default valueOrWarn
