const firstNonConsecutive = arr => arr.find((el, i, arr) => (arr[i] - arr[i-1]) !== 1 && !!i)
