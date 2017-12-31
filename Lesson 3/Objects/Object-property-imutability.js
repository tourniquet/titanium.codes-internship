const getLiteralObjectWithConstant = container => {
  Object.defineProperty(container, 'PI', {
    value: 3.14,
    writable: false,
    configurable: false
  });
  return container;
}
