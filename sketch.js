var car,wall;
var car1,wall1;
var speed,weight;

function setup() {
createCanvas(1800,600);
car=createSprite(50, 200, 50, 30);
car.velocityX=45;

car1=createSprite(50,480,50,30);
car1.velocityX=45;

wall=createSprite(1200,200,20,150);
wall.shapeColor="purple";

wall1=createSprite(1200,480,20,150)
wall1.shapeColor="brown";

speed=random(55,90);
weight=random(400,1500);

}

function draw() {
background(255,255,255); 

if(wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22500;
if(deformation>180)
{
car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
car.shapeColor=color(0,255,0);
}
}

if(wall1.x-car1.x<(car1.width+wall1.width)/2)
{
car1.velocityX=0;
var deformation=0.5 * weight * speed * speed/22500;
if(deformation>180)
{
car1.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
car1.shapeColor=color(0,0,255);
}
if(deformation<100)
{
car1.shapeColor=color(0,0,0);
}
}
drawSprites();
}