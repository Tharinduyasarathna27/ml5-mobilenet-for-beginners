let video;
let mobilenet;
let img;

function imageReady(){
  image(img, 0, 0, width, height);
  mobilenet.predict(img, gotResult);
}

function gotResult(error, result) {
  error?console.error(error):console.log(result);
  createP(`Lable: ${result[0].className}`);
  createP(`probability: ${result[0].probability}`);
}


function setup() {
  createCanvas(512,512);
  img = createImg('images/backpack.jpg', imageReady);
  img.hide();
  background(0);
  // video = createCapture(VIDEO);
  // video.hide();
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  // resultP = createP('wait...');
}

function draw() {
  // image(video,0,0,329,240);
  // put drawing code here
}

function modelReady(){
 console.log('model is ready!');
}