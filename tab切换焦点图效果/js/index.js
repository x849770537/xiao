var oLeftImg = document.getElementsByClassName('left')[0].getElementsByTagName('img');
var oRightImg = document.getElementsByClassName('right')[0].getElementsByTagName('img');
var oImg = document.getElementsByClassName('image')[0];
var oLeft = document.getElementsByClassName('left')[0];
// console.log(oRightImg + 63);
var lLen = oLeftImg.length;
var rLen = oRightImg.length;
var speed = 4;
var Top = 5;
var topAry = [3, 86, 168];
var nowTop = 0;
var moveloop = null;
var indexNum = 0
var autoTimer = setInterval( auto , 3000);
for (var i = 0; i < lLen ; i++){
    oLeftImg[i].index = i;
    oLeftImg[i].onmouseover = mouseover;
    oLeftImg[i].onmouseout = function (){
        autoTimer = setInterval( auto , 3000);
    };
}
function mouseover () {
    clearInterval(autoTimer);
    for(var i = 0;i < rLen ; i++){
        if ( i == this.index) {
            oRightImg[i].className = 'show';
            indexNum = i;
            Top = topAry[i];
            nowTop = oImg.offsetTop;
            if (moveloop == null){
                moveloop = setInterval(moveto, 20);
            }
        } else {
            oRightImg[i].className = '';
        }
    }
}
function moveto() {
    if (nowTop < Top){
        nowTop += speed;
        if(nowTop >= Top){
            nowTop = Top;
            clearInterval(moveloop);
            moveloop = null;
        }
    } else if(nowTop > Top) {
        nowTop -= speed;
        if(nowTop <= Top){
            nowTop = Top;
            clearInterval(moveloop);
            moveloop = null;
        }
    } else {
        clearInterval(moveloop);
        moveloop = null;
    }
    oImg.style.top = nowTop + 'px';
}
function auto() {
    indexNum += 1;
    if(indexNum >= 3){
        indexNum = 0;
    }
    for(var i = 0;i < rLen ; i++){
        if ( i == indexNum) {
            oRightImg[i].className = 'show';
            Top = topAry[i];
            nowTop = oImg.offsetTop;
            if (moveloop == null){
                moveloop = setInterval(moveto, 20);
            }
        } else {
            oRightImg[i].className = '';
        }
    } 

}