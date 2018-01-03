function threeDimensionalArr (arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        sum += arr[i][j][k]
      }
    }
  }

  return sum
}

// my code
// const threeDimensionalArr = arr => {
//   const a = arr.reduce((sum, i) => sum += i).split('')

//   if (/[a-zA-Z]/g.test(a)) {
//     return arr.reduce((sum, i) => sum += i).split(',').join('')
//   } else {
//     const b = a.filter(el => !isNaN(el)).map(el => Number(el))
//     return b.reduce((sum, i) => sum += i)
//   }
// }
