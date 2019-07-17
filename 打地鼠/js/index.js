var oWrap = document.getElementsByClassName('wrapper')[0];
var oMouseImg = document.getElementsByTagName('Img');
var oMouseBox = document.getElementsByClassName('mouse-box');
var oHammer = document.getElementsByClassName('hammer')[0];
var oMark = document.getElementById('mark');
var oTime = document.getElementById('time');
var oEnd = document.getElementById('end');
var oYouMark = document.getElementsByClassName('youmark')[0].getElementsByTagName('div')[0];
var oPlay = document.getElementsByClassName('play')[0];
var markNum = 0;
var len  = oMouseBox.length;
var ary = 0;
var timer;
var imgTop = 102;
let flag = true;
var playTimer
window.onload = function () {
    oPlay.onclick = function (e) {
        e.stopPropagation();
        oEnd.className = 'start'
        oEnd.style.background = 'transparent';
        oPlay.style.background = 'transparent';
        if(playTimer == null){
            var i = 3;
            oPlay.innerText = i;
            playTimer = setInterval(function(){
                i--;
                oPlay.innerText = i;
                if ( i == 0) {
                    oEnd.style.display = 'none';
                    clearInterval(playTimer);
                    playTimer = null;
                    init();
                }
            },1000);
        }
    }
}
function init(){
    var time = 60;
    oTime.innerText = time;
    markNum = 0;
    oWrap.style.cursor = 'none';
    var start =null;
    if (start == null){
        start = setInterval(mouseMove, 1500);
    }
    oWrap.onmousemove = hammerMove;
    var contdown = setInterval(function(){
        time--;
        oTime.innerText = time;
        if(time == 0){
            clearInterval(contdown);
            contdown = null;
            oWrap.onmousemove = null;
            oWrap.onmousedown = null;
            oWrap.onmouseup = null;
            oWrap.onclick = null;
            clearInterval(start);
            start = null;
            clearInterval(timer);
            timer = null;
            oMouseImg[ary].style.top = '102px';
            oEnd.style.display = 'block';
            oEnd.className = '';
            oYouMark.innerText = markNum;
            oPlay.innerText = 'Play'
            oPlay.style.background = '';
            oEnd.style.background = '';
            oWrap.style.cursor = ''
        }
    },1000)
    oWrap.onclick =  function (e) {
        var x = e.clientX - oMouseBox[ary].offsetLeft - oWrap.offsetLeft ;
        var y = e.clientY -oMouseBox[ary].offsetTop - oWrap.offsetTop ;
        if (x > 0 && x < 102 && y > 0 && y < 102) {
            oMouseImg[ary].src = "./img/mouse2.png";
            if (flag == false ){
                markNum++;
                flag = !flag;
            }
            oMark.innerText = markNum;
        }
    }
}

function mouseMove () {
    ary = Math.floor(Math.random() * 9);
    imgTop = 102;
    for (var i = 0; i < len; i ++) {
        if (i == ary) {
            oMouseImg[ary].src = "./img/mouse1.png";
            flag = !flag;
            if (timer == null){
                timer = setInterval(imgUp,20);
            }
        } else {
            oMouseImg[i].style.top = '102px'; 
        }
    }
}
function imgUp () {
    console.log('timer')
    imgTop -= 5;
    if (imgTop <= 0){
        imgTop = 0;
        clearInterval(timer);
        timer = null;
    }
    oMouseImg[ary].style.top = imgTop + 'px';
}
function hammerMove (e) {
    var h = e.clientY - oWrap.offsetTop - 50;
    var w = e.clientX - oWrap.offsetLeft - 50;
    oHammer.style.top = h + 'px';
    oHammer.style.left = w + 'px';
    oWrap.onmousedown = hammerDown;
    oWrap.onmouseup = hammerUp;
}

function hammerDown () {
    oHammer.className = 'hammer hammerdown'
}
function hammerUp () {
    oHammer.className = 'hammer'
}
