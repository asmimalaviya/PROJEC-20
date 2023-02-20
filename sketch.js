


function preload (){
    Bg=loadImage("images/iss.png");
    sleep=loadAnimation("images/sleep.png");
    brush=loadAnimation("images/brush.png");
    gym=loadAnimation("images/gym21.png","image/gym22.png");
    drink=loadAnimation("add image urls here");
    eat=loadAnimation("add image urls here");
    move=loadAnimation("add image urls here");
}
astronaut=createSprite(300,230);
astronaut.addAnimation("sleep",sleep);
astronaut.scale=0.1;

UpArrow=Brushing
DownArrow=Gymming
LeftArrow=Eating
RigthArrow=Bathing
mkey=Moving

if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushing);
    astronaut.changeAnimation("brushing")
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityY=0;
}

if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming",Gymming);
    astronaut.changeAnimation("Gymming")
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityY=0;
}

if (keyDown("Left_ARROW")){
    astronaut.addAnimation("Eating",Eating);
    astronaut.changeAnimation("Eating")
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityY=0;
}

if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing",Bathing);
    astronaut.changeAnimation("Bathing")
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityY=0;
}

if (keyDown("M_KEY")){
    astronaut.addAnimation("Moving",Moving);
    astronaut.changeAnimation("Moving")
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityY=0;
}
