let canvas1;
let originalImg = null;
let tmpImg = null;

window.addEventListener('load', ()=>{
  canvas1 = document.querySelector('#canvas1');
});

function loadForegroundImage() {
  let imgFile = document.getElementById('fgfile');
  originalImg = new SimpleImage(imgFile);
  tmpImg = new SimpleImage(imgFile);
  originalImg.drawTo(canvas1);
}

function resetImg() {
  loadForegroundImage();
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

function makeRainbow() {
  if(originalImg == null || !originalImg.complete()) {
    alert('Foreground not loaded.');
    return;
  }
  
  let output = new SimpleImage(originalImg.getWidth(), originalImg.getHeight());
  for(let pixel of originalImg.values()) {
    let tmpPixel = pixel;
    let x = tmpPixel.getX();
    let y = tmpPixel.getY();
    let h = originalImg.getHeight();
    let avg = (tmpPixel.getRed() + tmpPixel.getGreen() + tmpPixel.getBlue()) / 3;
    if(y<h/7) {                         // red
      tmpPixel.setGreen(0);
      tmpPixel.setBlue(0);
    } else if(y>=h/7 && y<h*2/7) {      // orange
      tmpPixel.setRed(avg);
      tmpPixel.setGreen(avg*0.55);
      tmpPixel.setBlue(0);
    } else if(y>=h*2/7 && y<h*3/7) {    // yellow
      tmpPixel.setRed(avg);
      tmpPixel.setGreen(avg);
      tmpPixel.setBlue(0);
    } else if(y>=h*3/7 && y<h*4/7) {    // green
      tmpPixel.setRed(0);
      tmpPixel.setBlue(0);
    } else if(y>=h*4/7 && y<h*5/7) {    // blue
      tmpPixel.setRed(0);
      tmpPixel.setGreen(0);
    } else if(y>=h*5/7 && y<h*6/7) {    // indigo rgb(75,0,130)
      tmpPixel.setRed(avg*(75/255));
      tmpPixel.setGreen(0);
      tmpPixel.setBlue(avg*(130/255));
    } else if(y>=h*6/7 && y<h) {        // violet rgb(127,0,255)
      tmpPixel.setRed(avg*(127/255));
      tmpPixel.setGreen(0);
      tmpPixel.setBlue(avg);
    }
    output.setPixel(x, y, tmpPixel);

  }

  output.drawTo(canvas1);
}

function makeRed() {
  if(originalImg == null || !originalImg.complete()) {
    alert('Foreground not loaded.');
    return;
  }
  
  let output = new SimpleImage(originalImg.getWidth(), originalImg.getHeight());
  for(let pixel of originalImg.values()) {
    let tmpPixel = pixel;
    let x = tmpPixel.getX();
    let y = tmpPixel.getY();
    tmpPixel.setGreen(0);
    tmpPixel.setBlue(0);
    output.setPixel(x, y, tmpPixel);
  }

  output.drawTo(canvas1);
}