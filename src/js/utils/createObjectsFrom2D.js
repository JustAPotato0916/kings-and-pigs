import CollisionBlock from '../objects/CollisionBlock.js'

export default Array.prototype.createObjectsFrom2D = function () {
  const objects = []
  this.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol === 292 || symbol === 250) {
        objects.push(
          new CollisionBlock({
            position: {
              x: x * 64,
              y: y * 64,
            },
          })
        )
      }
    })
  })

  return objects
}
