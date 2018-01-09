const evenLast = arr => arr.length ? arr.reduce((sum, val, i) => (i % 2 === 0) ? sum + val : sum) * arr[arr.length-1] : 0
