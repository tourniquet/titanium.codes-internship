const findBiggest = arr => {
  let biggest = 0

  arr.map(el => {
    if (el > biggest) biggest = el
  })

  return biggest
}
