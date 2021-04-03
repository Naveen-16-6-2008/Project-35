var balloon,balloonimg1,balloonimg2;
var Postion,database
var background_Img;
function preload(){
  balloonimg1 = loadAnimation("HotAirBallon-02.png","HotAirBallon-02.png","HotAirBallon-02.png","HotAirBallon-03.png","HotAirBallon-03.png","HotAirBallon-03.png","HotAirBallon-04.png","HotAirBallon-04.png","HotAirBallon-04.png");
 balloonimg2 = loadAnimation("HotAirBallon-02.png")
  background_Img = loadImage("HotAirBallon-01.png");
}
function setup() {
  database = firebase.database();

  createCanvas(1000,1000);
  balloon = createSprite(100, 400, 50, 50);
balloon.addAnimation("HotAirBallon",balloonimg1);
  var balloonPosition=database.ref( 'balloon/height');

  balloonPosition. on("value", readHeight, showError);
  
}

function draw() {
  background(background_Img); 
  if (keyDown ( LEFT_ARROW) ) {
    balloon. x = balloon.x - 10;
  }
    else if(keyDown (RIGHT_ARROW) ) {
    balloon .x = balloon.x + 10;
    }
    else if (keyDown (UP_ARROW) ) {
    balloon.y = balloon.y - 10;
    }
    else if (keyDown (DOWN_ARROW) ){
    balloon.y = balloon.y + 10;
    }
  drawSprites();
}
function updateHeight(x, y) {
  database. ref(' balloon/height' ) . set({
  'x': height.x + x ,
  'y': height.y + y
  })
}
  function readHeight(data) {
  height = data. val( );
  balloon.x = height.x;
  balloon.y = height.y;
  }
  function showError(){
  console. log("Error in writing to the database");
  }