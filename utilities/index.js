// Inputs
const ballSizeInput = document.getElementById('ball-size')
const randomSize = document.getElementById('random-size')
const randomSizeMin = document.getElementById('random-size-min')
const randomSizeMax = document.getElementById('random-size-max')
const ballColorInput = document.getElementById('ball-color')
const randomColor = document.getElementById('random-color')
const ballCountInput = document.getElementById('ball-count')

const getRandomNumber = (min = 0, max = 9) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandomColor = () => {
  return `hsl(${getRandomNumber(0, 360)}, 100%, 50%)`
}
export const getRandomPosition = (radius) => {
  // I want to add an option that will ensure the new position will
  // not collide with any existing ball.
  let x = getRandomNumber(radius, 500 - radius)
  let y = getRandomNumber(radius, 500 - radius)
  return {
    x,
    y
  }
}
export const getValues = () => {
  let randomSizeMinVal = randomSizeMin.value ? randomSizeMin.value : 5
  let randomSizeMaxVal = randomSizeMax.value ? randomSizeMax.value : 50
  let randomSizeValue = randomSize.checked
  let ballSize = !randomSizeValue ? ballSizeInput.value : getRandomNumber(randomSizeMinVal, randomSizeMaxVal)
  let randomColorValue = randomColor.checked
  let ballColor = !randomColorValue ? ballColorInput.value : getRandomColor()
  let ballCount = ballCountInput.value ? ballCountInput.value : 1
  return {
    ballSize,
    ballColor,
    ballCount
  }
}