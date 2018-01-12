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
  source.items.forEach(item => {
    const [key] = Object.keys(item)

    if (!destination.hasOwnProperty(source[key])) {
      Object.defineProperty(destination, key, {
        value: item[key],
        enumerable: true
      })
    }
  })

  if (!destination.hasOwnProperty('divideEquall')) {
    Object.defineProperty(destination, 'divideEqually', {
      value: source.divideEqually,
      enumerable: true
    })
  }
}
