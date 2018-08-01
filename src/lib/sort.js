import curry from './curry'

const sort = curry((fn, array) => array.sort(fn))

export default sort
