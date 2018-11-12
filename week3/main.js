let canvas1;
let canvas2;
let fgImage = null;
let bgImage = null;

window.addEventListener('load', ()=>{
  canvas1 = document.querySelector('#canvas1');
  canvas2 = document.querySelector('#canvas2');
  //let context1 = canvas1.getContext('2d');
  //let context2 = canvas2.getContext('2d');
  fgImage = document.getElementById('fgfile');
  bgImage = document.getElementById('bgfile');

});

function loadForegroundImage() {
  let imgFile = document.getElementById('fgfile');
  fgImage = new SimpleImage(imgFile);
  fgImage.drawTo(canvas1);
}

function loadBackgroundImage() {
  let imgFile = document.getElementById('bgfile');
  bgImage = new SimpleImage(imgFile);
  bgImage.drawTo(canvas2);
}

function greenScreen() {
  if(fgImage == null || !fgImage.complete()) {
    alert('Foreground not loaded.');
    return;
  }
  if(bgImage == null || !bgImage.complete()) {
    alert('Background not loaded.');
  }
  clearCanvas();
}