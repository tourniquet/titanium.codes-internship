function getLiteralObjectWithConstant (container) {
  container.PI = 3.14
  Object.freeze(container)

  return container
}
