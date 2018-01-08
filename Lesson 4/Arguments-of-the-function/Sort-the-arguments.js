function sortArgs () {
  const temp = Array.from(arguments)
  const operation = temp.pop()

  return operation === 'asc' ? temp.sort((a, b) => a - b) : temp.sort((a, b) => b - a)
}
