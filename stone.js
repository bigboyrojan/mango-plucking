class rock {
    constructor (x,y,width,height){
    var choices = {
    isStatic : true,
    restitution:0,
    friction:1,
    density:1.2

    } 
    this.body = Bodies.rectangle(x,y,width,height,choices);
    this.width = width;
    this.height = height;
    this.image = loadImage("Pluckingmangoes/stone.png");
    World.add(world,this.body);
    }
    display(){
    var gravel = this.body.position;
    rectMode (CENTER);
    fill(198);
    rect(gravel.x, gravel.y,this.width,this.height);
    image(this.image,gravel.x,gravel.y,this.width,this.height);
    }
    
    }