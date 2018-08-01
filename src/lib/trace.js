import curry from './curry'

const trace = curry((msg, arg) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg, arg)
  }

  return arg
})

export default trace
