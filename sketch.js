//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage("images/dogImg.png");
  happyDog = createSprite(250, 260);
  happyDog.addImage("images/dogImg1.png");
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
text("Note: Press Up Arrow Key To Feed The Dog Milk!", 250, 100);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
x = 0;
  }
else{
  x = x -1;
}

  database.ref('/')/update({
    Food:x
  })
}

