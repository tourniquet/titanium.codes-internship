const getLiteralObjectWithFunction = () => {
  const container = {
    getSquare (n) {
      return Math.pow(n, 2)
    }
  }

  return container
}
