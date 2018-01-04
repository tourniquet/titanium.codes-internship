const mergeArrays = (a, b) => {
  let len = a.length > b.length ? a.length : b.length

  const temp = []

  for (let i = 0; i < len; i++) {
    if (a[i]) temp.push(a[i])
    if (b[i]) temp.push(b[i])
  }

  return temp
}
