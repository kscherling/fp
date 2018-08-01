import { compose } from 'recompose'
import curry from './curry'
import isEmpty from './isEmpty'
import propOr from './propOr'
import reduce from './reduce'
import split from './split'

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
