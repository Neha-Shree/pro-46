//Run win done

// Creating all variables

var teddy , teddy_Img , rabbit , rabbit_Img ;
var forest , forest_Img ;
var apple , apple_Img , banana , banana_Img , grapes , grapes_Img , mango , mango_Img ;
var stone1 , stone1_Img , stone2 , stone2_Img , porcupine , porcupine_Img ;
var coin , coin_Img , basket , basket_Img ;
var forBgm , gameoverBgm , hitBgm , jumpBgm , lifeloseBgm , winBgm ;

function preload() {

  //Loading all images
   
    teddy_Img = loadImage("Images/teddy1.png");
    rabbit_Img = loadImage("Images/rabbit1.png");
    forest_Img = loadImage("Images/forest1.jpg");
    apple_Img = loadImage("Images/apple1.png");
    banana_Img = loadImage("Images/banana1.png");
    grapes_Img = loadImage("Images/grapes1.png");
    mango_Img = loadImage("Images/mango.png");
    stone1_Img = loadImage("Images/stone1.png");
    stone2_Img = loadImage("Images/stone2.png");
    porcupine_Img = loadImage("Images/porcupine1.png");
    coin_Img = loadImage("Images/coin1.png");
    basket_Img = loadImage("Images/basket1.png");

    //Loading all sounds

    forBgm = loadSound("Sounds/forest1.wav");
    gameoverBgm = loadSound("Sounds/Game_over.wav");
    hitBgm = loadSound("Sounds/Hit.wav");
    jumpBgm = loadSound("Sounds/Jump.wav");
    lifeloseBgm = loadSound("Sounds/Life_lose.wav");
    winBgm = loadSound("Sounds/Win.wav");

}

function setup() {

  //Creating canvas

  createCanvas(2000,2000);

  //Creating forest sprite , addimage , play sound , give scale  

  forest = createSprite(1300,500,100,100);
  forest.addImage("forest",forest_Img);
  forest.scale = 2.5 ;
  // forBgm.play();
 
}

function draw() {
  //give background
  background(255,255,255); 

  //giving forest vlocity

  forest.velocityX = -4;

  if (forest.x < 100){
    forest.x = forest.width/2;
   }

  //if(forest.x<100){
  //  forest.x=200
 // }
  
  //drawing sprites 

  drawSprites();
}