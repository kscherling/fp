import curry from './curry'

const map = curry((fn, array) => array.map(fn))

export default map
