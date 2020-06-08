//target ball class
class Ball {
  constructor(x,y,radius) {
    var options ={
      //air resitance, friction in general, static friction, makes it forever moving, bounciness
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }

    this.body = Bodies.circle(x,y,radius, options);
    World.add(world,this.body);

    this.radius = radius
    World.add(world,this.body);
  }

  display() {
    var pos = this.body.position
    var angle = this.body.angle
    //creates and allows the circle to move
    push();
    translate(pos.x, pos.y)
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0, 0,this.radius,this.radius);
    pop()
  }
}