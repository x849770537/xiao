var minBox = document.getElementsByClassName("min")[0],
    backBox = document.getElementsByClassName("move")[0],
    maxBox = document.getElementsByClassName("max")[0],
    maxImg = document.getElementById("max-img");
var newX,newY;
var minBoxW = minBox.offsetWidth, minBoxH = minBox.offsetHeight,
    backBoxW = backBox.offsetWidth, backBoxH = backBox.offsetHeight,
    maxBoxW = maxBox.offsetWidth, maxBoxH = maxBox.offsetHeight;
    maxImgW = maxImg.offsetWidth, maxImgH = maxImg.offsetHeight;
function init () {
    // minBox.addEventListener('onmouseover',minMove,);
    minBox.onmouseover =function(){
        maxBox.style.display = "inline-block";
        backBox.style.zIndex = "0";
        minMove();
        minBox.onmouseleave = function () {
            maxBox.style.display = "none";
            backBox.style.zIndex = "-1";
        }
    }
    
};
init();
function minMove () {
    minBox.onmousemove = function () {
        boxMove();
    };
};
function boxMove () {  
    newX = event.clientX - minBox.getBoundingClientRect().left - backBoxW / 2;
    newY = event.clientY - minBox.getBoundingClientRect().top - backBoxH / 2;
    if(newX < 0 ){
        newX = 0;
    }else if(newX > minBoxW -backBoxW ){
        newX = minBoxW - backBoxW;
    }
    if(newY < 0 ){
        newY = 0;
    }else if(newY > minBoxH - backBoxH ){
        newY = minBoxH - backBoxH;
    }
    backBox.style.left = newX + "px";
    backBox.style.top = newY + "px";
    //实际为 newX / maxImg.newX = moveBoxW / maxBoxW = 400 / 800 =2;
    //而maxBox固定，max图片移动 所以前面加 - 号。
    maxImg.style.left = -newX * 2 +"px";
    maxImg.style.top = -newY * 2 + "px";
}