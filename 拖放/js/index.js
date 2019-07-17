var otargbox = document.getElementsByClassName("targbox")[0],
    otarg = document.getElementsByTagName('li'),
    oremove = document.getElementsByClassName("remove")[0];
var index,clivktarg;
var len = otarg.length;
function init(){
    for(var i = 0; i < len; i++){
            otarg[i].addEventListener("dragstart",function (e) {
            var dt = e.dataTransfer;
            var index = findindex(this, otarg);
            dt.setData('data',index);
            });
        otarg[i].addEventListener("dragover",function (e) {
                e.preventDefault();
            });
        otarg[i].addEventListener("drop",function (e) {
            var dt =e.dataTransfer;
            var index = dt.getData('data');
            console.log(index);
            otargbox.insertBefore(otarg[index],this);
        });    
    };
};
function targremove(){
    oremove.ondragover = function(){
        event.preventDefault();
    };
    oremove.addEventListener("drop",function(e){
        var dt =e.dataTransfer;
        var index = dt.getData('data');
        // console.log(index);
        otarg[index].remove();
    });
}
init();
targremove();
function findindex( dom, domlists){
    var len= otarg.length;
    for(var i = 0; i < len; i++){
        if(dom == domlists[i]){
            return i;
        }
    }
}