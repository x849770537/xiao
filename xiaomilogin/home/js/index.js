let oTitleLogin = document.getElementsByClassName('title-login')[0]; //登录按钮
let oTitleRegister = document.getElementsByClassName('title-register')[0];//注册按钮
let oRegisterSpan = document.getElementById('registerspan'); //
let oMyorderspan = document.getElementById('myorderspan');
let oMyorder = document.getElementsByClassName('myorder')[0]; //我的订单
function init(){
    if(ls()){
        console.log(111)
        oTitleLogin.innerText = '已登录'
        oTitleLogin.setAttribute('href', '#')
        oTitleRegister.style.display = 'none';
        oRegisterSpan.style.display = 'none';
        oMyorderspan.style.display = 'block';
        oMyorder.style.display = 'block';
    }
};
init();
function ls(){
    let cookieArr = document.cookie.split('; ');
    let len = cookieArr.length;
    for(let i = 0; i < len; i++){
        let arr = cookieArr[i].split('=');
        if(arr[0] == 'Token'){
            return arr[1];
        }
    }
}