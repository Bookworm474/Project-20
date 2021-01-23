var garden, garden_image;
var tom, tom_resting, tom_walking, tom_final;
var jerry, jerry_resting, jerry_teasing, jerry_final;

function preload() {
    //load the images here
    garden_image = loadImage("images/garden.png");

    tom_resting = loadImage("images/cat1.png");
    tom_walking = loadAnimation("images/cat2.png","images/cat3.png");
    tom_final = loadAnimation("images/cat4.png");
        
    jerry_resting = loadImage("images/mouse1.png");
    jerry_teasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry_final = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage(garden_image);

    tom = createSprite(750,650,10,10);
    tom.addImage(tom_resting);
    tom.scale = 0.1;

    jerry = createSprite(200,650,10,10);
    jerry.addImage(jerry_resting);
    jerry.scale = 0.1;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.velocityX = 0;
        tom.addAnimation("tom-final", tom_final);
        tom.changeAnimation("tom-final");
        tom.x = tom.x + 50;
        
        jerry.addAnimation("jerry-final", jerry_final);
        jerry.changeAnimation("jerry-final");
    }

    drawSprites();
}

function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("walking", tom_walking);
        tom.changeAnimation("walking");

        jerry.addAnimation("teasing", jerry_teasing);
        jerry.changeAnimation("teasing");
    }
}