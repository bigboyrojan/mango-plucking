class tree {
constructor (x,y,width,height){
var choices = {
isStatic : true
} 
this.body = Bodies.rectangle(x,y,width,height,choices);
this.width = width;
this.height = height;
this.image = loadImage("Pluckingmangoes/tree.png");

World.add(world,this.body);
}
display(){
var tre = this.body.position;
rectMode (CENTER);
fill(198);
rect(tre.x, tre.y,this.width,this.height);
image(this.image,tre.x,tre.y,this.width,this.height);
}

}