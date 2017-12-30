const getMostPaidEmployee = obj => {
  let biggest = 0
  let name = ''

  for (let key in obj) {
    if (obj[key] === undefined) name = ''
    if (obj[key] > biggest) {
      biggest = obj[key]
      name = key
    }
  }

  return name
}
