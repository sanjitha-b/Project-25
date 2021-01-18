class dustbin{
constructor(x,y){
    this.x=x
    this.y=y
    this.SBheight=100; // Side wall (left and right)height
    this.BBwidth = 200;// Bottom Body Width
this.Bthick = 20; //height of bottom body and width of side walls
this.angle=0	     
this.BB=Bodies.rectangle(this.x,this.y,this.BBwidth,this.Bthick,{isStatic:true})
this.LW = Bodies.rectangle(this.x-this.BBwidth/2,this.y-this.SBheight/2,this.Bthick,this.BBheight,{isStatic:true})
this.RW=Bodies.rectangle(this.x+this.BBwidth/2, this.y-this.SBheight/2, this.Bthick, this.SBheight, {isStatic:true})
this.image = loadImage("dustbingreen.png")
World.add(world, this.BB)
World.add(world, this.LW)
World.add(world, this.RW)
}

display(){
    var posBottom=this.BB.position
    var posLeft=this.LW.position
    var posRight=this.RW.position

    fill('yellow')
   // rect(posLeft.x,posLeft.y,this.Bthick,this.SBheight)

  //  rect(posRight.x,posRight.y,this.Bthick,this.SBheight)
    
 //   rect(posBottom.x, posBottom.y,this.BBwidth, this.Bthick)
    imageMode(CENTER)
    image(this.image,posBottom.x,posBottom.y-60, this.BBwidth, this.SBheight+20 )

}

}




























