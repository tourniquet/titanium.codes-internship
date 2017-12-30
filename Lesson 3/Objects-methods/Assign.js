var source = {
  items: [
    {A: 100},
    {B: 120},
    {C: 140}
  ],
  divideEqually: 35
}

var destination = {}

const putToDestination = source => {
  for (let key in source) {
    if  (destination[key] === source[key]) continue
    Object.defineProperty(destination, key, {
      value: obj[key],
      enumerable: true
    })
  }

  return destination
}
