var col1 = "#ff80aa";
var col2 = "#ffe6e6";

var coin;
var soundDrop;
var soundCoins;


function preload() {
  coin = loadImage('assets/coin.png');
  soundDrop = loadSound('assets/coindrop.mp3');
  soundCoins = loadSound('assets/coins_sound.mp3');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(color(col1));

  //touches coins
  for (var i = 0; i < touches.length; i++) {
    image(coin, touches[i].x, touches[i].y, 90, 90);
    if (touches[i].y < height / 4) {
      soundDrop.play();
    }
  }

  //text insert coin
  push()
  fill(0)
  textAlign(CENTER, TOP);
  textFont("Bangers");
  textSize(15)
  text('insert coins in the Piggy Bank', width / 2 - 50, height / 4 - 80, 100);
  pop()

  //where to insert coin
  push()
  fill(0);
  rectMode(CENTER);
  rect(width / 2, height / 4, 130, 10);
  pop()
  //piggy face
  fill(color(col1));
  rect(0, height / 4 + 5, width, 3 * height / 4)
  //piggy eyes
  fill(0)
  ellipseMode(CENTER);
  ellipse(width / 2 - 50, 3 * height / 5, 20);
  ellipse(width / 2 + 50, 3 * height / 5, 20);
  //piggy nose
  fill(color(col2))
  ellipse(width / 2, 3 * height / 4, 100, 50);
  fill(color(col1))
  ellipse(width / 2 - 20, 3 * height / 4, 10, 20);
  ellipse(width / 2 + 20, 3 * height / 4, 10, 20);

  //text insert coin
  push()
  fill(color(col2))
  textAlign(CENTER, TOP);
  textFont("Bangers");
  textSize(20)
  text('Shake it!', width / 2 - 3, height - 80);
  pop()

}

function touchMoved() {
  return false;
}

function deviceShaken() {
  soundCoins.play();
}


function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
