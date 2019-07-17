var loginTabs = document.getElementById("loginTabs");//选项卡 登录
var registerTabs = document.getElementById("registerTabs");//选项卡 注册

var login = document.getElementsByClassName('login')[0];//登录块
var usernameLogin = document.getElementById('username-login');//登录名
var pwdLogin = document.getElementById('pwd-login');//登录密码
var btnLogin = document.getElementById('btn-login');//登录提交按钮

var register = document.getElementsByClassName('register')[0];//注册块
var usernameRegister = document.getElementById('username-register');//注册名
var pwdRegister = document.getElementById('pwd-register');//注册密码
var pwd2Register = document.getElementById('pwd2-register');//确认密码
var btnRegister = document.getElementById('btn-register');//注册提交按钮


let oInput = document.getElementsByTagName('input'); //所有input 方便更改提示
let oList = document.getElementsByClassName('list'); //所有list 警告元素
var pattern = /^[\w_-]{6,16}$/;//密码正则 最短6位，最长16位 {6,16}可以包含小写大母 [a-z] 和大写字母 [A-Z]可以包含数字 [0-9]可以包含下划线 [ _ ] 和减号 [ - ]
//切换登录页
loginTabs.onclick = function(){
    register.style.display = "none";
    login.style.display = "block";
    loginTabs.className="tabs-link select";
    registerTabs.className="tabs-link";
}
//切换注册页
registerTabs.onclick = function(){
    register.style.display = "block";
    login.style.display = "none";
    loginTabs.className="tabs-link";
    registerTabs.className="tabs-link select";
}

//index页面跳转到登录和注册页面
function init(){
    let arr = location.search.slice(1).split('=');
    if(arr[1] == 'register'){
        console.log(222)
        registerTabs.click();
    }
    console.log(arr)
}

//注册
btnRegister.onclick = function(e){
    e.preventDefault();
    // console.log(usernameRegister.value)
    if(usernameRegister.value == ''){
        // console.log(2222)
        oList[2].innerText = '账号不能为空';
    }else{
        if(pwdRegister.value != pwd2Register.value){
            oList[4].innerText = '两次输入的密码不一致';
        }else if(pwdRegister.value == usernameRegister.value){
            oList[4].innerText = '密码和账号不能一样';
        } else if( pattern.test(pwdRegister.value) ){
            let data = 'name=' + usernameRegister.value +'&password=' + pwdRegister.value;
            console.log(data);
            // ajax('POST', 'http://api.chanke.xyz/mock/11/register', registercbs, data, true)
            ajax('POST', 'http://vip.chanke.xyz/mi/register', registercbs, data, true)
        }else{
           oList[4].innerText = '密码长度不符合要求，请重新输入';
        }
    } 
}
//注册回调函数
function registercbs(data){
    cbs(data, 2);
}

//登录
btnLogin.onclick = function(e){
    e.preventDefault();
    // console.log(11)
    if(usernameLogin.value == ''){
        oList[0].innerText = '用户名不能为空'
    }else if(pwdLogin.value == ''){
        oList[1].innerText = '密码不能为空'
    }else{
        let data = 'name=' + usernameLogin.value + '&password=' + pwdLogin.value;
        // ajax('POST', 'http://api.chanke.xyz/mock/11/login', logincbs, data, true);
        ajax('POST', 'http://vip.chanke.xyz/mi/login', logincbs, data, true);
    }
}
//登录回调函数 
function logincbs(data){
    cbs(data, 1);
}

//回调函数
function cbs(data, index){
    data = JSON.parse(data);
    if(data.errorCode == 0){
        console.log(00000)
        location.href = './index.html'
    }else {
        oList[index].innerText = data.errorMessage;
    }
}
//错误提示change函数
let len = oInput.length;
for(let i = 0; i < len; i++){
    if( i != 4 || i != 2 || i != 6){ //注册时密码提示不能消除 
        oInput[i].oninput = function(){
            // console.log(i)
            if(i == 0){
                oList[1].innerText = '';
            }else if(i > 2){
                oList[i - 1].innerText = '';
            }else{
                oList[i].innerText = '';
            }
        }
    } 
}
init();
