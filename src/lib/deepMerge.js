import curry from './curry'

const cloneObj = obj => ({ ...obj })

const deepMerge = curry((_target, _source) => {
  const source = cloneObj(_source)
  const target = cloneObj(_target)

  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepMerge(target[key], source[key]))
    }
  }

  Object.assign(target, source)

  return target
})

export default deepMerge
