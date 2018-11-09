
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
// original image of castle
let img = new SimpleImage('chapel.png');
print(img);

function imgSize(img){
    print(img.getWidth() + ' x ' + img.getHeight());
}
imgSize(img);

// **************** 6 *********************

for(let pixel of img.values()) {
// changing all the colors of the castle
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(pixel.getBlue());
    pixel.setBlue(pixel.getRed());

// changing sky blue beside of the castle    
    /*if(pixel.getBlue()>160 &&(pixel.getGreen()<250) && (pixel.getRed()<200)){
        pixel.setBlue(0);
        pixel.setGreen(0);
        pixel.setRed(0);
    }*/
}
print(img);

