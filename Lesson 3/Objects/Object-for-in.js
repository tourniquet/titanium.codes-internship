const getObjectWithCircleAreasFunction = container => {
  container.circlesAreas = {}

  container.getCircleAreas = function () {
    for (let key in container.circles) {
      container.circlesAreas[key] = container.getSquare(container.circles[key]) * container.PI
    }
  }

  return container
}
