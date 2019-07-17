var oBody = document.getElementsByTagName('body')[0];
var Ary = [];
var Div = [];
var index = 0;
var divIndex;
var num = Math.floor(Math.random()*6) + 3;
for (var i = 0; i < num; i++ ){
    Ary[i] = Math.floor(Math.random()*99) + 5;
}
var len = num -1;
function init () {
    for (var i = 0; i < len; i++){
        Div[i] = document.createElement('div');
        Div[i].innerText = Ary[i];
        Div[i].style.height = Ary[i]*5 + 'px';
        Div[i].style.left = i * 40 + 'px';
        oBody.appendChild(Div[i]);
    } 
    // oDiv = oBody.getElementsByTagName('div');
    oneChange();
    
}
window.onload = function(){
    init ()
};
function oneChange () {
    console.log(Div)
    var leftDiv = Div[index];
    var rightDiv = Div[index + 1];
    Div[index].style.backgroundColor = 'yellowgreen';
    Div[index + 1].style.backgroundColor = 'yellow';
    if (parseInt(leftDiv.innerText) < parseInt(rightDiv.innerText)){
        leftDiv.style.left = (index + 1) * 40 + 'px';
        rightDiv.style.left = index * 40 + 'px';
        Div[index] = rightDiv;
        Div[index + 1] = leftDiv;
    }
    console.log(Div) 
    if (index < len-2){
        setTimeout(nextChange, 1500);
    }else {
        index = 0;
        len--;
        if (len > 1) {
            setTimeout(function(){
                Div[len].style.backgroundColor = 'red';
                Div[len -1].style.backgroundColor = '';
            }, 1500);
            setTimeout(oneChange, 1500);
        }else if (len = 1){
            setTimeout(function(){
                Div[len].style.backgroundColor = 'red';
                Div[len -1].style.backgroundColor = 'red';
            }, 1500); 
        }
    }   
}
function nextChange () {
    Div[index].style.backgroundColor = '';
    Div[index + 1].style.backgroundColor = '';
    index ++;
    oneChange();
}
