const firstNonConsecutive = arr => {
  let result

  arr.map((el, i, arr) => {
    if (arr[i+1] - arr[i] > 1) result = arr[i+1]
  })

  return result
}
