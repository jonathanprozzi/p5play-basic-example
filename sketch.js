var spr;
var pc;
var score = 0;

var timerOn = false;
var accTimer;
var countVal = 0;
var gameOn;
var sprXinit;
var sprYinit;
var sprX;
var sprY;

function setup(){
  createCanvas(600,600);
  var sprXinit = width/2;
  var sprYinit = height/2;

  spr = createSprite(sprXinit, sprYinit, 60,60);
  spr.shapeColor = color(255,0,100);
  
  pc = createSprite(0,0,20,20);
  pc.shapeColor= color(0,255,100);
  console.log(score);
}

function draw() {
  background(50);
  drawSprites();
  // var d = dist(spr.width, spr.height, mouseX, mouseY);
  // need better collision detection!
  // console.log('spr.width: ' + spr.width + 'spr.height: ' + spr.height + 'current dist: ' + d);
  pc.velocity.x = (mouseX-pc.position.x);
  pc.velocity.y = (mouseY-pc.position.y);
  
  if (pc.overlap(spr) && !timerOn)  {
    gameOn = true;
    timerOn = true;
    console.log('timer on!');
    console.log('timer bool:' + timerOn);
    window.setTimeout(timeTrack, 1000);
  } 
  
  if (!pc.overlap(spr) && timerOn) {
    timerOn = false;
    console.log('timer off!');
    console.log('timer bool:' + timerOn);
    countVal = 0;
    window.clearTimeout(timeTrack);
  }
  
  if (score < 10) {
    fill(255,100,0);
    noStroke();
    textSize(72);
    textAlign(CENTER,TOP);
  }
  
  if (gameOn === true) {
    if (countVal == 3) {
      console.log('nice job!');
     // window.setTimeout(teleportSpr, 1000); //wait 1 second and then teleport
      score += 1;
      var sprX = random(width - 50);
      var sprY = random(height - 50);
      spr.position.x = sprX;
      spr.position.y = sprY;
      gameOn = false;
    }
  }
  
}


function timeTrack() {
  if (timerOn) {
    accTimer = setTimeout(timeTrack, 1000);
	  countVal ++;
    console.log('value: ' + countVal);
  }
}
