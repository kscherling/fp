const isEmpty = value => {
  switch (typeof value) {
    case 'object':
      if (Array.isArray(value)) {
        return value.length ? value : undefined
      }

      return Object.keys(value).length ? value : undefined
    default:
      return value
  }
}

export default isEmpty
