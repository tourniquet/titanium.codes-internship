function average () {
  const temp = Array.from(arguments)

  return !temp.length ? 0 : temp.reduce((sum, el) => sum += el) / temp.length
}
