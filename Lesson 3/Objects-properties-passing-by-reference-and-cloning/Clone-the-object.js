const galaxy = {
  planets: {
    1: 'earth',
    2: 'mars',
    3: 'venus'
  },
  stars: {
    4: 'procyon',
    5: 'sirius',
    6: 'sun'
  }
}

const clonedGalaxy = {}

function cloneTheObject() {
	return Object.assign({}, { planets: galaxy.planets })
}
