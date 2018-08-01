const warn = (key, props) => {
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'test'
  ) {
    return
  }

  console.error(
    `missing-prop-error: Could not find '${key}' in provided props`,
    props
  )

  return
}

export default warn
