var oUl = document.getElementsByTagName('ul')[0];
var oLi = document.getElementsByTagName('li');
window.onload = function () {
    oUl.className = 'init';
}
var len = oLi.length;
for(var i = 0; i < len; i++){
    oLi[i].onmouseenter = function (e) {
        var dir = getDirection(e,this);
        console.log(dir);
        var oDes = this.getElementsByClassName('des')[0];
        oDes.className = 'des';
        if(dir == 0){
            oDes.classList.add('top-int');
        }else if (dir == 1){
            oDes.classList.add('right-int');
        }else if (dir == 2){
            oDes.classList.add('bot-int');
        }else if (dir == 3){
            oDes.classList.add('left-int');
        }
    }
    oLi[i].onmouseleave = function (e) {
        var dir = getDirection(e,this);
        console.log(dir);
        var oDes = this.getElementsByClassName('des')[0];
        oDes.className = 'des';
        if(dir == 0){
            oDes.classList.add('top-out');
        }else if (dir == 1){
            oDes.classList.add('right-out');
        }else if (dir == 2){
            oDes.classList.add('bot-out');
        }else if (dir == 3){
            oDes.classList.add('left-out');
        }
    }
}
function getDirection(e,ele) {
    var w = ele.offsetWidth;
    var h = ele.offsetHeight;
    var x = (e.offsetX - w/2) * (w > h ? h/w : 1);
    var y = (e.offsetY - h/2) * (h > w ? w/h : 1);
    var d = (Math.round((Math.atan2(y, x)* (180/Math.PI) + 180)/90) + 3) % 4;
    return d;
}