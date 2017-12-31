const evenLast = arr => arr.length ? arr.filter((el, i) => i % 2 === 0).reduce((sum, el) => sum += el) * arr.pop() : 0
