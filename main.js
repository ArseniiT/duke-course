
// here is classes and methods which use Duke Learn To Programming library (DLTP)

// **************** 1 *********************
let x = 10;
let y = 2;
let z = x*y;
print(z);


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

