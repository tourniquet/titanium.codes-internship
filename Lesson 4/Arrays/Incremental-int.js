const fillArrayInt = n => {
  const arr = []

  for (let i = 1; i <= n; i++) {
    arr.push(i.toString().repeat(i))
  }

  return arr
}
