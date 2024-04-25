var canvaselem = document.getElementById("canvas");
var ctx = canvaselem.getContext("2d");

// Set initial canvas size
canvaselem.width = window.innerWidth;
canvaselem.height = window.innerHeight;

// window.addEventListener("resize", function () {
//     canvaselem.width = window.innerWidth;
//     canvaselem.height = window.innerHeight;
   
// });

var startBackgroundColor = "white";

var drawing = false;

function draw() {
    canvaselem.addEventListener("mousedown", startDrawing);
    canvaselem.addEventListener("mousemove", drawLine);
    canvaselem.addEventListener("mouseup", stopDrawing);
}

function startDrawing(e) {
    drawing = true;
    drawLine(e);
}

function drawLine(e) {
    if (!drawing) return;

    var x = e.clientX - canvaselem.offsetLeft;
    var y = e.clientY - canvaselem.offsetTop;

    ctx.lineTo(x, y);
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}


function clearCanvase() {
    
    ctx.clearRect(0, 0, canvaselem.width, canvaselem.height);
    ctx.fillStyle = startBackgroundColor;
    ctx.fillRect(0, 0, canvaselem.width, canvaselem.height);
}


function erase() {

    // ctx.lineWidth = 15;
    // ctx.fillStyle = startBackgroundColor;
    
    ctx.strokeStyle=startBackgroundColor;

    
}

function changeSize(curSize) {
    ctx.lineWidth = curSize.value;
}

function changeColor(color) {

    ctx.strokeStyle = color;

}


function changeBackgroundColor(newColor) {

    startBackgroundColor = newColor.value;
    ctx.fillStyle = startBackgroundColor;
    ctx.fillRect(0, 0, canvaselem.width, canvaselem.height);
    ctx.strokeStyle = startBackgroundColor;

}

var download = document.getElementById('download');

download.addEventListener('click',saveAsImage);

  function saveAsImage(e)
  {
    var link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;

  }
