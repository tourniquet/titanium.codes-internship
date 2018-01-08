function executableFunctionsArguments () {
  const temp = Array.from(arguments).filter(el => typeof el === 'function')
  const result = temp.map(el => el())

  return result
}
