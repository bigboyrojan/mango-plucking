class mangos  {
constructor (x,y,radius){

var choices = {
    isStatic: true,
    restitution: 0,
    friction: 1,
}
this.body = Bodies.circle(x,y,radius, choices);
this.radius = radius;
this.image = loadImage("Pluckingmangoes/mango.png");
World.add(world, this.body);
}
display() {
var ball = this.body.position;
push();
translate(ball.x,ball.y);
rotate(this.body.angle);
ellipseMode(RADIUS);
fill(200,32,40);
ellipse(ball.x,ball.y,this.radius)
image(this.image,ball.x,ball.y,this.radius*2,this.radius*2);
pop();
}

}