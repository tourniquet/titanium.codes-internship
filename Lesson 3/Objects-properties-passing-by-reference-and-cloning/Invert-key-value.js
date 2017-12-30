const invertKeyValue = obj => {
  const newObj = {}

  for (let key in obj) {
    Object.defineProperty(newObj, obj[key], {
      value: key,
      enumerable: true
    })
  }

  return newObj
}
