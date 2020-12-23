const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hex1,plat;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("Sprites/28.jpg");
}

function setup(){
var canvas = createCanvas(700,400);
engine = Engine.create();
world = engine.world;

hex = new Hexa(200,200,50,50);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    hex.display();
}