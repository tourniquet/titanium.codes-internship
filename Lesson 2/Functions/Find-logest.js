const findLongest = arr => {
  let longest = 0

  arr.map(el => {
    if (el.toString().length > longest.toString().length) longest = el
  })

  return longest
}
