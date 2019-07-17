var Names = document.getElementById("Names").getElementsByTagName("li");
    console.log(Names);
var Contents = document.getElementById("Contents").getElementsByTagName("article");
    console.log(Contents);
var backgrounds = document.getElementById("Contents");
    console.log(backgrounds);
for(var i = 0; i < Names.length; i++){
    Names[i].onclick = showlist;
}
function showlist(){
    for(var i = 0; i < Names.length; i++){
        if(Names[i] === this){
            Names[i].className = "main-nav";
            Contents[i].className = "dope-sec";
            switch(i){
                case 0:
                    backgrounds.className = "dope1";
                    break;
                case 1:
                    backgrounds.className = "dope2";
                    break;
                case 2:
                    backgrounds.className = "dope3";
                    break;
                case 3:
                    backgrounds.className = "dope4";
                    break;
                case 4:
                    backgrounds.className = "dope5";
                    break;
            };
        }else {
            Names[i].className = " ";
            Contents[i].className = " ";
        }
    }
}