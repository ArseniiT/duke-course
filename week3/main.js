window.addEventListener('load', ()=>{
  let canvas1 = document.querySelector('#canvas1');
  let canvas2 = document.querySelector('#canvas2');
  let context1 = canvas1.getContext('2d');
  let context2 = canvas2.getContext('2d');

  context1.fillStyle='green';
  context2.fillStyle='red';
  
  context1.fillRect(0,0, canvas1.clientWidth, canvas1.height);
  context2.fillRect(0,0, canvas2.clientWidth, canvas2.height);
  
});