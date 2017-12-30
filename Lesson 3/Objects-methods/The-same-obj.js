const checkObjects = (first, second) => {
  const firstObj = Object.keys(first)
  const secondObj = Object.keys(second)

  let sum = 0

  for (let i = 0; i < firstObj.length; i++) {
    if (firstObj.length === secondObj.length && firstObj[i] === secondObj[i]) {
      sum += first[firstObj[i]] + second[secondObj[i]]
    } else if (firstObj[i] !== secondObj[i]) {
      return false
    }
  }

  return sum
}
