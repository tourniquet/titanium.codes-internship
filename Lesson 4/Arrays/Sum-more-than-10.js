const func = arr => {
  if (arr[0] > 10) return 1

  const temp = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    temp.push(arr[i])

    if (temp.reduce((sum, i) => sum += i) > 10) return temp.length
  }
}
