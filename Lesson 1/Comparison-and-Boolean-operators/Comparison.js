const comparison = a => {
  if (typeof a === 'number') return `Variable "a" is a number and is equal to ${a}`
  if (typeof a === 'string') return `Variable "a" is a string and is equal to "${a}"`

  return 'Variable "a" is not a number or a string'
}
