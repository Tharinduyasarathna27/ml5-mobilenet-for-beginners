let video;
let mobilenet;
let lable;
let probability;

// function imageReady(){
//   image(img, 0, 0, width, height);
//   mobilenet.predict(img, gotResult);
// }

function gotResult(error, result) {
  error?console.error(error):console.log(result);
  lable = `Lable: ${result[0].className}`;
  probability =`probability: ${result[0].probability}`;

  mobilenet.predict(video , gotResult);
}


function setup() {
  createCanvas(512,512);
  // img = createImg('images/backpack.jpg', imageReady);
  // img.hide();
  // background(0);
  video = createCapture(VIDEO);
  video.hide();
  mobilenet = ml5.imageClassifier('MobileNet', video , modelReady);
  // resultP = createP('wait...');
}

function draw() {
  background(0);
  image(video ,0 ,0 ,width );
  fill(255);
  textSize(20);
  text(lable, 10,height-10)
  // put drawing code here
}

function modelReady(){
 console.log('model is ready!');
 mobilenet.predict(video , gotResult);
}