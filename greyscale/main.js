function upload() {
  
  //let fileName = fileInput.files[0];
  let canvas = document.querySelector('#canvas');
  let fileInput = document.getElementById('finput');
  //let context = canvas.getContext('2d');
  let image = new SimpleImage(fileInput);

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