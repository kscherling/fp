import curry from './curry'

const prop = curry((name, obj) => obj[name])

export default prop
