let image;
let canvas;

window.addEventListener('load', ()=> {
  canvas = document.getElementById('canvas');
  
});

function upload() {
  let fileInput = document.getElementById('finput');
  image = new SimpleImage(fileInput);
  image.drawTo(canvas);
}

function makeGrayscale() {
  for(let pixel of image.values()) {
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image.drawTo(canvas);
}





/* window.addEventListener('load', ()=> {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  
  img.src = 'http://www.flexibleproduction.com/wp-content/uploads/2017/06/test-intelligenza-sociale.jpg';
  img.onload = ()=>{
    ctx.drawImage(img,0,0);
  };
}); */