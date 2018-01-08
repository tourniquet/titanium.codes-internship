function duplicateArgs() {
  const temp = Array.from(arguments).sort()

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i+1]) return true
  }

  return false
}
