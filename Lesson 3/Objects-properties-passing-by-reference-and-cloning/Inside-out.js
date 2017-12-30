const insideOut = obj => {
  const newObj = {}

  for (let key in obj) {
    let keyType = typeof obj[key]

    Object.defineProperty(newObj, keyType, {
      value: key,
      enumerable: true,
      configurable: true
    })
  }

  return newObj
}
