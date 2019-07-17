var centUl = document.getElementById('centul');
var centLi = centUl.getElementsByTagName('li');
var centL = document.getElementById('centL');
var cnetR = document.getElementById('centR');
var centBox = document.getElementsByClassName('cent-box')[0];
var centName = document.getElementsByClassName('cent-down');
var cent = document.getElementsByClassName('cent');
var centList = document.getElementsByClassName('cent-list');
// var centL = cnetLeft.getElementsByTagNameNS('div');
// console.log(centL);
var teachrs = [{
//     name: "Aimee",
//     thumb: "./image/amiee.jpg",
//     info: "蝉壳教育前端讲师，原腾讯前端工程师，负责腾讯微信移动端城市服务项目，拥有丰富的移动端项目开发经验。熟练运用并深入理解CSS3、HTML5，擅长前端页面复杂动态效果的实现与优化。精通原生JavaScript、Vue.js，React.js拥有丰富的前端研发以及互联网教学经验。",
// },{
    name: "CC",
    thumb: "./img/cc.jpg",
    info: "上海交通大学计算机专业、交大安泰MBA。现上海蝉壳网络CTO，全栈架构师。从事互联网研发及管理12余年，曾主导研发数个百万级用户的大型项目如：国内首个H5应用制作平台、返利网电商广告反劫持等。原上海央讯联合创始人兼CTO，独立设计百万并发的Dsp系统。精通大前端技术、python、C/C++等，是人工智能及大数据领域专家",
},
{
    name: "孙一诺",
    thumb: "./img/孙一诺_副本.png",
    info: "原上海凌梦科技有限公司CTO，资深全栈架构师，从事互联网一线研发及架构设计10余年，拥有丰富的整站开发经验，自主研发了针对复杂业务逻辑的PHP+JavaScript框架，应用于数个项目，大幅提升了研发效率。拥有丰富的企业技术内训经验，擅长前端技术、Python、PHP，爬虫领域专家。",
},
{
    name: "刘鲁巍",
    thumb: './img/刘鲁巍.png',
    info: "蝉壳教育前端讲师，原滴滴出行大数据部门前端工程师，负责滴滴大数据可视化平台搭建。精通原生JavaScript，拥有极强的代码逻辑，擅长优化复杂逻辑的JavaScript项目代码。熟练运用多种前端框架，在Vue.js、React.js上颇有建树，并拥有丰富的线上线下教育经验及独特的授课方式。",
},
{
    name: "Aimee",
    thumb: "./img/温冰.png",
    info: "蝉壳教育前端讲师，原腾讯前端工程师，负责腾讯微信移动端城市服务项目，拥有丰富的移动端项目开发经验。熟练运用并深入理解CSS3、HTML5，擅长前端页面复杂动态效果的实现与优化。精通原生JavaScript、Vue.js，React.js拥有丰富的前端研发以及互联网教学经验。",
},
// {
//     name: "CC",
//     thumb: "./image/cc.jpg",
//     info: "上海交通大学计算机专业、交大安泰MBA。现上海蝉壳网络CTO，全栈架构师。从事互联网研发及管理12余年，曾主导研发数个百万级用户的大型项目如：国内首个H5应用制作平台、返利网电商广告反劫持等。原上海央讯联合创始人兼CTO，独立设计百万并发的Dsp系统。精通大前端技术、python、C/C++等，是人工智能及大数据领域专家",
// }
];
var len = centLi.length;
var teachHtml = [];
var teachImage = [];
var sum = 0;
function init () {
    teach(0);
    centL.onclick = function () {
        teach(1);
    }
    cnetR.onclick = function () {
        teach(-1);
    }
}
init();
function teach(a) {
    sum = sum + a
    for (var i = 0; i < len; i ++){
        sum = sum + 1;
        if (sum  >= len){
            sum = sum - len;
        }else if(sum < 0){
            sum = sum + len;
        }
        // console.log(cent[i]);
        // console.log(teachrs[sum].info);
        centList[i].innerHTML = '<p>蝉壳学院讲师</p>' + teachrs[sum].info;
        // console.log(centList[i]);
        centName[i].innerHTML = teachrs[sum].name
        teachImage[i]= teachrs[sum].thumb;
        console.log(teachImage[i]);
    }
    console.log(teachImage);
    for ( var j = 0; j < len; j++){
        cent[j].style.backgroundImage = 'url(' + teachImage[j] + ')';
    }
}
