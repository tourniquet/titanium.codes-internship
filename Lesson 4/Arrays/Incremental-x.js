const fillArray = n => {
  const arr = []

  for (let i = 1; i <= n; i++) {
    arr.push('x'.repeat(i))
  }

  return arr
}
