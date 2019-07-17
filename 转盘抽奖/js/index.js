var oTd = document.getElementsByClassName('tab')[0].getElementsByTagName('td');
var oStart = document.getElementsByClassName('start')[0];
var showAry = [0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5,];
var showName = [7, 'plum', 'BAR', 'lemon', 'banana', 'orange', 'cherry', 'watermelon', 7, 'plum', 'BIGWIN', 'lemon', 'banana', 'orange', 'cherry', 'watermelon',]
var endNume = [];
var lastName = 0;
var startNume = 0;
var movetimer = null;
var speed = 2;
var index = 0;
var len = showAry.length;
var num = 0;
var nums = 0;
oTd[13].onclick = function () {
    if(startNume == 3){
        oTd[11].innerText = '当前只支持一次投一个币，剩余可玩次数3次';
    } else if(startNume > 0 ){
        oTd[11].innerText = '当前可玩'+ startNume +'次，请玩完在投币' ;
    } else {
        startNume = 3;
        oTd[11].innerText = '剩余可玩次数' + startNume + '次';
    }
}
oStart.onclick = function () {
    if(startNume == 0) {
        oTd[11].innerText = "请投币";
        oTd[17].innerText = '';
        oTd[17].style.backgroundImage = '';
    } else {
        if(startNume == 3){
            oTd[6].style.backgroundImage = '';
            oTd[7].style.backgroundImage = '';
            oTd[8].style.backgroundImage = '';

        }
        if (movetimer == null){
            num = len * 3 + Math.floor(Math.random() * len);
            startNume --;
            oTd[11].innerText = '剩余可玩次数' + startNume + '次';
            movetimer = setInterval(moveto, 200);
        }
    }
    
}
function moveto () {
    for (var i = 0; i < len; i++){
        if (i == index){
            oTd[showAry[i]].className = "show";
        } else {
            oTd[showAry[i]].className = "";
        }
    }
    index +=1;
    if( index >= len ){
        index = 0;
    }
    nums ++;
    if (nums >= num) {
        clearInterval(movetimer);
        movetimer = null;
        lastName = lastName + num;
        endNume[startNume] = lastName % len -1;
        if (endNume[startNume] == -1) {
            endNume[startNume] = 15;
        }
        oTd[8 - startNume].style.backgroundImage = 'url(./img/' + showName[endNume[startNume]] +'.png)';
        nums =0; 
        if(startNume == 0 ){
            if( endNume[0] == endNume[1] && endNume[0] == endNume[2]){
                //1等奖
                oTd[17].innerText = '恭喜获得一等奖'
            }else if( endNume[0] == endNume[1] || endNume[2] == endNume[1] || endNume[0] == endNume[2]){
                //二等价
                oTd[17].innerText = '恭喜获得二等奖'
            }else {
                oTd[17].innerText = '恭喜啥也没中';
                oTd[17].style.backgroundImage = 'url(./img/xiao.jpg)'
            }
        }
        return;    
    } else if (num - nums == 6 ){
        clearInterval(movetimer);
        movetimer = setInterval(moveto, 200);
    }else if (nums == 6) {
        clearInterval(movetimer);
        movetimer = setInterval(moveto, 20);
    }
}