var olist = document.getElementsByClassName("list")[0],
    onavwrap = document.getElementsByClassName("nav-wrap")[0];
olist.onclick = function () {
    if(onavwrap.className == "nav-wrap"){
        onavwrap.classList.add("nav");
    }else {
        onavwrap.classList.remove("nav");
    }
}