import { compose } from 'recompose'
import curry from 'lib/fp/curry'
import propOr from 'lib/fp/propOr'
import split from 'lib/fp/split'
import isEmpty from 'lib/fp/isEmpty'
import reduce from 'lib/fp/reduce'

// prettier-ignore
const dig = curry(
  (keys, props) =>
    compose(
      isEmpty,
      reduce(
        (acc, key) => propOr(key, {})(acc),
        props
      ),
      split('.')
    )(keys)
  )

export default dig
