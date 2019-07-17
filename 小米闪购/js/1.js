var taps = document.getElementById("taps").getElementsByTagName('li');
// console.log(taps);
var lists = document.getElementById("lists").getElementsByTagName("ul");
var searchFor = document.getElementsByClassName("search-text")[0];
var Search = document.getElementById("search");
var gudinglan =document.getElementById("gudinglan");
for(var i = 0; i <taps.length; i++){
    taps[i].onclick =showlist;
}

function showlist(){
    for(var i = 0; i<taps.length; i++){
        if( taps[i] === this){
            taps[i].className = "acvite";
            lists[i].className ="clearfix goods";
        }else {
            taps[i].className = "";
            lists[i].className ="clearfix";
        }
        
    }
}

window.onscroll = function(){
    var tops =document.documentElement.scrollTop;
    console.log(tops);
    if(tops >=273){
        gudinglan.className = "shangou-nav shangou-navfiex";
    }else {
        gudinglan.className = "shangou-nav";
    }
}
searchFor.onfocus = function (){
    console.log(1111);
    Search.style.zIndex = -1;
    
}
searchFor.onblur = function (){
    console.log(2);
    Search.style.zIndex = 2;   
}