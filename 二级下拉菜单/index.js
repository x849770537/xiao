var owraplist = document.getElementsByClassName("wrap-box")[0].getElementsByTagName('li');
var len = owraplist.length;
for (var i = 0 ; i < len ; i++){
    owraplist[i].onmouseover = function (){
        this.className = "show";
    }
    owraplist[i].onmouseout = function (){
        this.className = "";
    }
}