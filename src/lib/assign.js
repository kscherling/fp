import curry from './curry'

const assign = curry((a, b) => Object.assign({}, a, b))

export default assign
