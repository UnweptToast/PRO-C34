const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;

var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var beam;
var rope1, rope2, rope3, rope4, rope5;
var ballPos;
var ballY

function setup() {
    engine = Engine.create();
    world = engine.world;
    createCanvas(windowWidth, windowHeight);

    beam = new Ground(width/2, height/3.5, width/2.5, 40);
    ballPos = beam.body.position.x;
    ballY = beam.body.position.y + 300;

    ball1 = new Ball(ballPos, ballY, 40);
    ball2 = new Ball(ballPos + 80, ballY, 40);
    ball3 = new Ball(ballPos + 300, ballY - 100, 40);
    ball4 = new Ball(ballPos - 80, ballY, 40);
    ball5 = new Ball(ballPos - 160, ballY, 40);

    rope1 = new Rope(ball1.body, beam.body, 0, 0)
    rope2 = new Rope(ball2.body, beam.body, 80, 0)
    rope3 = new Rope(ball3.body, beam.body, 160, 0)
    rope4 = new Rope(ball4.body, beam.body, -80, 0)
    rope5 = new Rope(ball5.body, beam.body, -160, 0)
}

function draw() {
    background(0);
    Engine.update(engine);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    beam.display();
    console.log(ball1)
}

function  mouseDragged() {
    Matter.Body.setPosition(ball3.body, {x: mouseX, y: mouseY})
}