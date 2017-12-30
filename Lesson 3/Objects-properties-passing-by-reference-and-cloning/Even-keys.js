const evenObjectKeys = obj => {
  const arr = []

  for (let key in obj) {
    if (!(obj[key] % 2)) arr.push(key)
  }

  return arr
}
