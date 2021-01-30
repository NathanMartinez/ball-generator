import {
  addBalls,
  clearScreen
} from './utilities/inputHandler.js'

// Canvas and Context
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// Buttons
const AddBallButton = document.getElementById('add-ball-button')
const ClearScreenButton = document.getElementById('clear-screen-button')
// Balls Array
let balls = []

// Add Balls
AddBallButton.addEventListener('click', () => addBalls(ctx, balls))
// Clear screen
ClearScreenButton.addEventListener('click', () => clearScreen(ctx, canvas, balls))