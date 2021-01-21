//Create variables here
var dog, happyDog, databsae, Foods, foodstock;

function preload()
{
  dog = loadImage('images/dogImg');
  happyDog = loadImage('images/dogImg1');
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(200,200,10,10);
  dog.addImage(dog);

  foodstock=database.ref('Food');
  foodstock.on("value", readStock);
}


function draw() {  
background(46,139,87);

    drawSprites();
  //add styles here

text("Note:" + "Press" + "UP_ARROW" + "key" + "to" + "feed" + "Milo" + "Milk!"); 
textSize(0,175,50,50);
fill(white);
stroke();

  if(keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(happyDog);
  }
}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  databsae.ref('/').update({
    Food:x
  })
}


