class Paper {
    constructor(x,y,radius) {
      var options = {
  restitution: 0.3,
  friction: 0.5,
  density:1
      }
      this.body = Bodies.circle(x,y,radius,options);
 
     this.radius = radius
      World.add(world, this.body);
this.image = loadImage("paper.png")

    }
    display(){
      var pos =this.body.position;
    // ellipseMode(RADIUS);
    //  fill("brown");
    
      //ellipse(pos.x, pos.y, this.radius, this.radius);
      imageMode(CENTER)
      image(this.image,pos.x, pos.y, this.radius+30, this.radius+30 )
      
    }
  };