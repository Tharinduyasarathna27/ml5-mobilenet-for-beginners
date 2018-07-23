let video;

function setup() {
  createCanvas(400,400);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video,0,0,329,240);
  // put drawing code here
}