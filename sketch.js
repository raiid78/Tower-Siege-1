const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var platform1, platform2;
var polygon;
var slingShot
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground(600, 300, 100, 20);
    platform2 = new Ground(900, 240, 100, 20);

    box1 = new Box(600,280);
    box2 = new Box(600,280);
    box3 = new Box(600,280);
    box4 = new Box(600,280);
    box5 = new Box(600,280);
    box6 = new Box(600,280);
    box7 = new Box(600,280);
    box8 = new Box(600,280);
    box9 = new Box(600,280);
    box10 = new Box(600,280);
    box11 = new Box(600,280);
    box12 = new Box(600,280);
    box13 = new Box(600,280);
    box14 = new Box(600,280);
    box15 = new Box(600,280);
    box16 = new Box(600,280);
    box17 = new Box(600,280);
    box18 = new Box(600,280);
    box19 = new Box(600,280);
    box20 = new Box(600,280);
    box21 = new Box(600,280);
    box22 = new Box(600,280);
    box23 = new Box(600,280);
    box24 = new Box(600,280);
    box25 = new Box(600,280);

}
function draw(){
    background(0);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

}
function mouseDragged(){

}
function mouseReleased(){

}
