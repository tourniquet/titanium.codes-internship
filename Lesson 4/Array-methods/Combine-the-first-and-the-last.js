// const combineArrayElements = arr => `${arr[0]}-${arr[arr.length-1]}`

const combineArrayElements = arr => {
  const temp = []

  temp.push(arr.shift())
  temp.push(arr.pop())

  return temp.join('-')
}
