const itSelfProperties = obj => {
  const arr = []

  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) {
      arr.push(key)
    }
  }

  return arr
}
