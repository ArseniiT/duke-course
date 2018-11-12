function doChange() {
  let d1 = document.getElementById('yellow-txt');
  let d2 = document.getElementById('blue-txt');
  d1.className = '';
  d2.className = '';
}
function divClick() {
  alert("It's not a button");
}

function canv() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  context.fillStyle = 'yellow';
  context.fillRect(10,10,40,40);
  
  
}