
// here is classes and methods which use Duke Learn To Programming library (DLTP)

// **************** 1 *********************
/*let x = 10;
let y = 2;
let z = x*y;
print(z);*/


// **************** 2 *********************
class Animal{
  constructor(name){
      this.name = name;
  }
  printName(){
      print('My name is ' + this.name);
  }
}
let cat = new Animal('Kitty');
cat.printName();

// **************** 3 *********************
function textConcat(t1, t2){
  print(t1 + ' ' + t2);
}
textConcat('text one', 'and text two.');

// **************** 4 *********************
// yellow square
let img2 = new SimpleImage(200, 200);

for(let pixel of img2.values()) {
  pixel.setRed(255);
  pixel.setGreen(255);
  pixel.setBlue(0);
}
print(img2);

// **************** 5 *********************
// original image of chapel
let img = new SimpleImage('chapel.png');
print(img);

function imgSize(img){
  print(img.getWidth() + ' x ' + img.getHeight());
}
imgSize(img);

// **************** 6 *********************

for(let pixel of img.values()) {
// changing all the colors of the chapel
  pixel.setRed(pixel.getGreen());
  pixel.setGreen(pixel.getBlue());
  pixel.setBlue(pixel.getRed());

// changing sky blue beside of the chapel    
  /*if(pixel.getBlue()>160 &&(pixel.getGreen()<250) && (pixel.getRed()<200)){
      pixel.setBlue(0);
      pixel.setGreen(0);
      pixel.setRed(0);
  }*/
}
print(img);

// **************** 7 *********************
//  putting three vertical stripes
let photo = new SimpleImage('hilton.jpg');
let photoW = photo.getWidth();
print(photo);
for(let pixel of photo.values()) {
  if(pixel.getX()<photoW/3){
      pixel.setRed(255);
  } else if(pixel.getX()>photoW/3 && pixel.getX()>(photoW*2/3) ) {
      pixel.setBlue(255);
  } else {
      pixel.setGreen(255);
  }
}
print(photo);

// **************** 8 *********************
//  swap the red and green values of the pixel
function swapRedGreen(pixel) {
  let tmp = pixel.getRed();
  pixel.setRed(pixel.getGreen());
  pixel.setGreen(tmp);
}

for(let pixel of photo.values()) {
  swapRedGreen(pixel);
}
print(photo);

// **************** 9 *********************
// change the Duke blue devil to be yellow
let dukeDevil = new SimpleImage('duke_blue_devil.png');
print(dukeDevil);

for(let pixel of dukeDevil.values()) {
  // all except white color
  if(pixel.getBlue() !=255 && pixel.getRed() !=255 && pixel.getGreen() !=255){
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(0);
  }
}
print(dukeDevil);

// **************** 10 *********************
//  green screen algorithm
let rob = new SimpleImage('drewRobert.png');
let dino = new SimpleImage('dinos.png');

print(rob);
for(let pixel of rob.values()) {
//if green is more common than red and blue together
  if(pixel.getGreen() > (pixel.getRed() + pixel.getBlue())){
      let x = pixel.getX();
      let y = pixel.getY();
      pixel.setAllFrom(dino.getPixel(x,y));
  } 
}
print(rob);

// **************** 11 *********************
//  gfind and fix the bug (yellow has to be red)
var imgM = new SimpleImage(200,200);
for (var px of imgM.values()){
var x = px.getX();
var y = px.getY();
if (x < imgM.getWidth()/2){
  px.setRed(255);
}
if (y>imgM.getHeight()/2){
  px.setBlue(255);
}
// bug was here
if (y<=imgM.getHeight()/2 && x >= imgM.getWidth()/2) {
  px.setGreen(255);
}
}
print (imgM);

// **************** 12 *********************
//  add a black border to an image
let panda = new SimpleImage('smallpanda.png');
print (panda);

function setBlack(p) {
  p.setRed(0);
  p.setGreen(0);
  p.setBlue(0);
  return p;
}

function addBorder(i, border ) {
  let iW = i.getWidth();
  let iH = i.getHeight();
  
  for (var px of i.values()){
      let x = px.getX();
      let y = px.getY();
  
      if(x<= border || y <= border || x>=(iW-border) || y>=(iH-border) ) {
          i.setPixel(x, y, setBlack(px));
      }
  }
  return i;
}

let pandaBorder = addBorder(panda, 15)
print (pandaBorder);
