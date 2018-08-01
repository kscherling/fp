import curry from './curry'

const find = curry((fn, array) => array.find(fn))

export default find
