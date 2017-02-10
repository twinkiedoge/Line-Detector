var capture;
var h = 480;
var w = 640;
var total = 0;

//colors in 20 pixels if they are similiar color
function colorin(i){
  for(var a = 0; a<80; a+=4){
    pixels[i+a]=0;
    pixels[i+1+a]=0;
    pixels[i+2+a]=0;
  }
}

function setup() {
  //setup video
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, w, h);
  loadPixels();
  
  for(var i=0;i<pixels.length;i+=4) {
      //if the difference in color between 20 pixels is similar color them in
      if(Math.abs(pixels[i]- pixels[i+4])+Math.abs(pixels[i+8]- pixels[i+12])+Math.abs(pixels[i+16]- pixels[i+20])+Math.abs(pixels[i+24]- pixels[i+28])+Math.abs(pixels[i+32]- pixels[i+36])+Math.abs(pixels[i+40]- pixels[i+44])+Math.abs(pixels[i+48]- pixels[i+52])+Math.abs(pixels[i+56]- pixels[i+60])+Math.abs(pixels[i+64]- pixels[i+68])+Math.abs(pixels[i+72]- pixels[i+76])<2) { 
      //execute function colorin^
      colorin(i);
    }
  }
  updatePixels();
}