//creates the cannon ball
class CanonBall {
  constructor(x, y) {
    var options = {
      //mass, friction, bounciness, air resistance
      "density" : 0.6,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    //gives the width and height
    this.width = 25;
    this.height = 25;
    //creates the body
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    //gives img
    this.ballImage = loadImage('assets/canonBall.png');
    World.add(world, this.body);
  };

  display(){
    if(flag === "launch"){
      var pos = this.body.position;
      var angle = this.body.angle

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.ballImage,0, 0, this.width, this.height);
      pop();
    }
  };
};