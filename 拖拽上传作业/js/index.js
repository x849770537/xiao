var odrag = document.getElementsByClassName("drag")[0];
var oprogress = document.getElementsByClassName("progress")[0];
var otext = document.getElementsByClassName("text")[0];
var oval = document.getElementsByClassName("val")[0];
var file;
var reader = new FileReader();
var start = 0, step = 1024*1024; 
var filesize,loaded = 0;
odrag.addEventListener("dragover", function (e) {
    e.preventDefault();
});
odrag.addEventListener("drop" , function (e) {
    e.preventDefault(); 
    loaded = 0;
    oval.style.width =  "0";
    otext.innerHTML = "0%";
    file = e.dataTransfer.files[0];
    filesize = file.size;
    console.log(filesize);
    readerBlob( 0, step);
    bindEvent();
});
function readerBlob (start , step) {
    if(file.slice){
        var blob = file.slice(start, start + step);
    }else {
        var blob = file;
    }
    reader.readAsDataURL(blob);
}
function bindEvent(){
    reader.onprogress = function (e) {
        onProgress(e.loaded);
    }
    reader.onload = function (){
        onLoad();
    }
}
function onProgress (num) {
    loaded += num;
    var per = loaded / filesize;
    if( per > 1) {
        per = 1;
    }
    oval.style.width = per * 250 + "px";
    otext.innerHTML = Math.round(per * 100) + "%";
}
function onLoad () {
    var result = reader.result;
    console.log("已上传第" + loaded +"部分");
    if (loaded < filesize) {
        readerBlob (loaded , step)
    }else {
        console.log("上传成功");
        odrag.innerHTML = "文件上传成功，请拖拽下一个文件";
    }
}