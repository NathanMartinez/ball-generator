class Ball {
  constructor(ctx, pos = {
    x: 100,
    y: 100
  }, radius = 10, color = '#000') {
    this.ctx = ctx
    this.pos = pos
    this.radius = radius
    this.color = color
  }
  update() {

  }
  show() {
    var circle = new Path2D();
    circle.arc(this.pos.x, this.pos.y, this.radius, 0, this.radius * Math.PI);
    this.ctx.fillStyle = this.color
    this.ctx.fill(circle)
  }
}
export default Ball