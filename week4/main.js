let canvas1;
let originalImg = null;
let greenThreshold = 200;

window.addEventListener('load', ()=>{
  canvas1 = document.querySelector('#canvas1');
});

function loadForegroundImage() {
  let imgFile = document.getElementById('fgfile');
  originalImg = new SimpleImage(imgFile);
  originalImg.drawTo(canvas1);
}

function reset() {
  originalImg.drawTo(canvas1);
}

function makeGrey() {
  if(originalImg == null || !originalImg.complete()) {
    alert('Foreground not loaded.');
    return;
  }
  
  let output = new SimpleImage(originalImg.getWidth(), originalImg.getHeight());
  for(let pixel of originalImg.values()) {
    let tmpPixel = pixel;
    let x = tmpPixel.getX();
    let y = tmpPixel.getY();
    let avg = (tmpPixel.getRed() + tmpPixel.getGreen() + tmpPixel.getBlue()) / 3;
    tmpPixel.setRed(avg);
    tmpPixel.setGreen(avg);
    tmpPixel.setBlue(avg);
    output.setPixel(x, y, tmpPixel);
  }

  output.drawTo(canvas1);
}