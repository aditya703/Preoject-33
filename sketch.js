var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gameState = "play";

var divisionHeight=300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 5, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}

function mousePressed(){
  if(gameState != "end"){
    turn++;
    particle = new Particle(mouseX, 10, 10);

  }
}

function draw() {
  background("black");
  textSize(24);
  text("Score: " + score, 20, 40);

  for(var x = 20; x <= 300; x += 80){
    text("500", x, 700);
  }
  for(var y = 340; y <= 500; y += 80){
    text("100", y, 700);
  }
  for(var z = 580; z <= 800; z += 80){
    text("200", z, 700);
  }

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle != null){

    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x < 300){
        score += 500;
      }
      if(particle.body.position.x > 300 && particle.body.position.x < 550){
        score += 100;
      }
      if(particle.body.position.x > 550 && particle.body.position.x < 800){
        score += 200;
      }
      particle = null;
    }
    if(turn > 5){
      gameState = "end";
    }
  }
    if(gameState === "end"){
      particle = null;
      textSize(50);
      text("GAME OVER", 200, 250);
    }
}
   



