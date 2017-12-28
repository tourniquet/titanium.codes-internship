const createDict = (keys, values) => {
  const object = {}

  keys.map((el, i, arr) => {
    if (values[i]) object[keys[i]] = values[i]
    else object[keys[i]] = null
  })

  return object
}
