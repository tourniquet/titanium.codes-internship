const evenLast = arr => {
  let sum = 0

  arr.filter((el, i, arr) => {
    if (i % 2 === 0) {
      sum += arr[i]
    }
  })

  if (!sum) return 0

  return sum * arr[arr.length - 1]
}
