import curry from './curry'

// prettier-ignore
const reduce = curry(
  (fn, initial, array) => array.reduce(fn, initial)
)

export default reduce
