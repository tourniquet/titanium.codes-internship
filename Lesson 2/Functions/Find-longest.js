// If two numbers in the argument array have the same number of digits, return the first one in the array.
// findLongest([1,111,1111,5555,10000,90000]) should return 10000

const findLongest = arr => arr.sort((a, b) => a - b).find(el => String(el).length === String(arr[arr.length-1]).length)
