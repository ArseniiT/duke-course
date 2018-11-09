
// here is classes and methods which use Duke Learn To Programming library (DLTP)

let x = 10;
let y = 2;
let z = x*y;
print(z);



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



let img = new SimpleImage('chapel.png');
print(img);
print(img.getWidth());
print(img.getHeight());
//print(img.getPixel());

function imgSize(img){
    print(img.getWidth() + ' x ' + img.getHeight());
}

imgSize(img);

function textConcat(t1, t2){
    print(t1 + ' ' + t2);
}

textConcat('text one', 'and text two.');


for(let pixel of img.values()) {
    let newG = 255 - pixel.getGreen();
    print(newG);
}








