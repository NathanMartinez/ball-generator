import Ball from '../Ball/index.js'
import {
  getRandomPosition,
  getValues
} from './index.js'

export const addBalls = (ctx, ballsArray) => {
  let {
    ballCount
  } = getValues()
  for (let i = 0; i < ballCount; i++) {
    let {
      ballSize,
      ballColor
    } = getValues()
    let ball = new Ball(ctx, getRandomPosition(ballSize), ballSize, ballColor)
    ballsArray.push(ball)
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballsArray.forEach(ball => {
    ball.show()
  });
}
export const clearScreen = (ctx, canvas, ballsArray) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballsArray.splice(0, ballsArray.length)
}

// We need to add a check to see if random color is selected or not.
// If it is then we would need to set a random color if not then we would use the color selected.