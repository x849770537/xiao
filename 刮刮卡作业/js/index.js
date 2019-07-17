   var Mycanvas = document.getElementsByClassName("canvas")[0];
var ctx = Mycanvas.getContext("2d");
var w = Mycanvas.width;
var h = Mycanvas.height;
function init(){
    var random = Math.random();
    if( random < 0.1){
        Mycanvas.style.backgroundImage = 'url(img/1.jpg)';
    }else {
        Mycanvas.style.backgroundImage = 'url(img/no.jpg)';
    }
    ctx.fillStyle="#ccc";
    ctx.fillRect(0,0,w,h);
    Mycanvas.onmousedown = function () {
      mouseDown();
    };
};
init();
var x,y;
function mouseDown () {
        ctx.beginPath();
        x = (event.clientX - Mycanvas.getBoundingClientRect().left) * w / 400;
        y = (event.clientY - Mycanvas.getBoundingClientRect().top) * h / 400;
        ctx.arc(x,y,40,0,Math.PI*2);
        ctx.closePath();
        ctx.globalCompositeOperation = 'destination-out' ;
        ctx.fill();
        Mycanvas.onmousemove=function(){
            mouseMoveto();
        }
        document.body.onmouseup = function () {
            mouseUP();
        }
}
function mouseMoveto () {
    var newX,newY;
    ctx.beginPath();
    newX = (event.clientX - Mycanvas.getBoundingClientRect().left) * w / 400;
    newY = (event.clientY - Mycanvas.getBoundingClientRect().top) * h / 400;
    ctx.lineWidth = '80';
    ctx.moveTo(x,y);
    ctx.lineCap = "round";
    ctx.lineTo(newX,newY);
    ctx.globalCompositeOperation = 'destination-out' ;
    ctx.stroke();
    x = newX;
    y = newY;
}
function mouseUP() {
    Mycanvas.onmousemove = null;
    document.body.onmouseup = null;
    clearCover();
}
function clearCover () {
    var sum = 0;
    var imagedata = ctx.getImageData(0,0,w,h);
    for(var i = 0; i < imagedata.data.length ; i += 4 ){
        if(imagedata.data[i] == 0){
            sum ++;
        }
    }
    if( sum > w * h * 0.7){
        ctx.clearRect(0, 0, w, h);
    }
}