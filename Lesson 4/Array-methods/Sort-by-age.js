const solution = obj => {
  const temp = []

  for (let key in obj) {
    temp.push({ 'key': key, 'sallary': obj[key] })
  }

  const sorted = temp.sort((a, b) => a.sallary - b.sallary)
  return sorted.map(el => el.key).join(', ')
}
