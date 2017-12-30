const sortObject = (obj) => {
  const sortedObj = {}
  const rawdata = []

  for (let key in obj) {
    rawdata.push({
      'key': key,
      'value': obj[key]
    })
  }

  const sortedData = rawdata.sort((a, b) => b.value - a.value)
  sortedData.map((el, i, arr) => {
    Object.defineProperty(sortedObj, arr[i].key, {
      value: arr[i].value,
      enumerable: true
    })
  })

  return sortedObj
}
