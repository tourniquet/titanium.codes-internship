const sumOf = function () {
  const temp = Array.from(arguments).filter(el => !isNaN(el))

  return !temp.length ? 0 : temp.map(e => Number(e)).reduce((s, n) => s += n)
}
