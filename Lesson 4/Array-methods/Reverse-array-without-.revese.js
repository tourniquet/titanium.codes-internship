const reverseArray = arr => {
  const len = arr.length
  const temp = []

  for (let i = len - 1; i >= 0; i--) {
    temp.push(arr[i])
  }

  return temp
}
