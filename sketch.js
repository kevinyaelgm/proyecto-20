var astronauta,dormir,comer,bañar,ejercicio,movimiento;

function preload(){
  dormir = loadImage("sleep.png");
  ejercicio = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  bañar = loadAnimation("bath1.png","bath2.png");
  comida = loadAnimation("eat1.png","eat2.png");
  movimiento = loadAnimation("drink1.png","drink2.png");
  fondo = loadImage("iss.png");
  cepillarse = loadImage("brush.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  astronauta = createSprite (300,230);
  astronauta.addImage(dormir);
  astronauta.scale = 0.5;
}

function draw() {
  background(fondo); 
  drawSprites();

fill("black");
textSize(30);
text("INSTRUCCIONES",20,35);
text("Flecha hacia arriba = cepillarse",20,55);
text("Flecha hacia abajo = ejercitarse",20,75);
text("Flecha hacia izquierda = comer",20,95);
text("Flecha hacia derecha = bañarse",20,115);
text("tecla m = moverse",20,135);

edges = createEdgeSprites();
astronauta.bounceOff(edges);

if(keyDown(UP_ARROW)){
astronauta.addAnimation("cepillarse",cepillarse);
astronauta.changeAnimation("cepillarse");
}

if(keyDown(DOWN_ARROW)){
  astronauta.addAnimation("ejercicio",ejercicio);
  astronauta.changeAnimation("ejercicio");
  astronauta.velocityX = 0;
astronauta.velocityY = 0;
}

if(keyDown(LEFT_ARROW)){
  astronauta.addAnimation("comida",comida);
  astronauta.changeAnimation("comida");
  astronauta.velocityX = 0;
astronauta.velocityY = 0;
}

if(keyDown(RIGHT_ARROW)){
  astronauta.addAnimation("bañar",bañar);
  astronauta.changeAnimation("bañar");
  astronauta.velocityX = 0;
astronauta.velocityY = 0;
}

if(keyDown("m")){
  astronauta.addAnimation("movimiento",movimiento);
  astronauta.changeAnimation("movimiento");
astronauta.velocityX = 3;
astronauta.velocityY = 3;
}




 
  
}