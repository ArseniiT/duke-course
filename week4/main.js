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

function showImgSize() {
  let imgSizeBlock = document.getElementById('img-size');
  imgSizeBlock.innerHTML = originalImg.getWidth() + ' x ' + originalImg.getHeight();
}

function makeGrey() {
  if(originalImg == null || !originalImg.complete()) {
    alert('Foreground not loaded.');
    return;
  }

  showImgSize();
  
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

let rad = 2;
function makeBlur() {
  if(originalImg == null || !originalImg.complete()) {
    alert('Foreground not loaded.');
    return;
  }
  rad++;
  let output = new SimpleImage(originalImg.getWidth(), originalImg.getHeight());
  let r,g,b;
  for(let pixel of originalImg.values()) {
    let tmpPixel = pixel;
    let x = tmpPixel.getX();
    let y = tmpPixel.getY();

    if(x%rad == 0) {
      r = tmpPixel.getRed();
      g = tmpPixel.getGreen();
      b = tmpPixel.getBlue();
  
    }
    tmpPixel.setRed(r)
    tmpPixel.setGreen(g)
    tmpPixel.setBlue(b)
    output.setPixel(x, y, tmpPixel);
  }
  output.drawTo(canvas1);
}

function makeRed2() {
  if(originalImg == null || !originalImg.complete()) {
    alert('Foreground not loaded.');
    return;
  }
  let output = new SimpleImage(originalImg.getWidth(), originalImg.getHeight());
  let r,g,b,x,y;
  for(let pixel of originalImg.values()) {
    let tmpPixel = pixel;
    x = tmpPixel.getX();
    y = tmpPixel.getY();
    r = tmpPixel.getRed();
    g = tmpPixel.getGreen();
    b = tmpPixel.getBlue();
    let avg = (r + g + b) / 3;
    if(avg < 128 ) {
      r = tmpPixel.setRed(r*2);
      g = tmpPixel.setGreen(0);
      b = tmpPixel.setBlue(0);
    } else {
      r = tmpPixel.setRed(255);
      g = tmpPixel.setGreen(avg*2-255);
      b = tmpPixel.setBlue(avg*2-255);
    }
    output.setPixel(x, y, tmpPixel);
  }
  output.drawTo(canvas1);
}

function myFilter() {
  if(originalImg == null || !originalImg.complete()) {
    alert('Foreground not loaded.');
    return;
  }
  let x,y;
  let w = originalImg.getWidth();
  let h = originalImg.getHeight();
  let output = new SimpleImage(w, h);

  for(let tmpPixel of originalImg.values()) {
    x = tmpPixel.getX()+1;
    y = tmpPixel.getY()+1;
    output.setPixel(w-x, h-y, tmpPixel);
  }
  output.drawTo(canvas1);
}