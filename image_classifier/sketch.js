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
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady(){
 console.log('model is ready!');
}