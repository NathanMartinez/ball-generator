import Ball from '../Ball/index.js'

// Canvas and Context
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const getRandomNumber = (min = 0, max = 9) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandomColor = () => {
  return `hsl(${getRandomNumber(0, 360)}, 100%, 50%)`
}

const getRandomPosition = (radius) => {
  // I want to add an option that will ensure the new position will
  // not collide with any existing ball.
  let x = getRandomNumber(radius, 500 - radius)
  let y = getRandomNumber(radius, 500 - radius)
  return {
    x,
    y
  }
}

export const addBalls = (ballsArray) => {
  let {
    ballCount
  } = getValues()
  for (let i = 0; i < ballCount; i++) {
    let {
      ballSize,
      ballColor,
      gravityValue
    } = getValues()
    let ball = new Ball(ctx, getRandomPosition(ballSize, ballsArray), ballSize, ballColor, gravityValue)
    ballsArray.push(ball)
  }
  ballsArray.forEach(ball => {
    ball.draw()
  });
}

export const updateClear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export const clearScreen = (ballsArray) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballsArray.splice(0, ballsArray.length)
}
// Inputs

// Ball Size
const ballSizeInput = document.getElementById('ball-size')
const randomSize = document.getElementById('random-size')
const randomSizeMin = document.getElementById('random-size-min')
const randomSizeMax = document.getElementById('random-size-max')

// Ball Color
const ballColorInput = document.getElementById('ball-color')
const randomColor = document.getElementById('random-color')

// Ball Count
const ballCountInput = document.getElementById('ball-count')

// Gravity
const gravity = document.getElementById('gravity')

// Buttons
export const AddBallButton = document.getElementById('add-ball-button')
export const ClearScreenButton = document.getElementById('clear-screen-button')

export const getValues = () => {
  let randomSizeMinVal = randomSizeMin.value ? randomSizeMin.value : 5
  let randomSizeMaxVal = randomSizeMax.value ? randomSizeMax.value : 50
  let randomSizeValue = randomSize.checked
  let ballSize = !randomSizeValue ? ballSizeInput.value : getRandomNumber(randomSizeMinVal, randomSizeMaxVal)
  let randomColorValue = randomColor.checked
  let gravityValue = gravity.value
  let ballColor = !randomColorValue ? ballColorInput.value : getRandomColor()
  let ballCount = ballCountInput.value ? ballCountInput.value : 1
  return {
    ballSize,
    ballColor,
    ballCount,
    gravityValue
  }
}