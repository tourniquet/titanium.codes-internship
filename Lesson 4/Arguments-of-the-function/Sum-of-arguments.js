const sumOf = function () {
  return arguments.length ? Array.from(arguments).filter(el => !isNaN(el)).reduce((s, n) => Number(s) + Number(n)) : 0
}
