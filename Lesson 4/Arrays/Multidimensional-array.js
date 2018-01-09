const twoDimensionalArr = arr => [].concat.apply([], arr).reduce((sum, el) => sum + el)
