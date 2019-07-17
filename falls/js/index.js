let oLi = document.getElementsByTagName('li');
let flag = true;
let cpage = 1;
let findMin = (arr)=>{
    let min = arr[0].offsetHeight;
    let index = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i].offsetHeight < min){
            min = arr[i].offsetHeight;
            index = i;
        }
    }
    return index;
}
function Start() {
    if(flag){
        flag = !flag;
        axjx('GET', 'http://vip.chanke.xyz/v02012/chanke/falls/getPics.php', cbs, 'cpage=' + cpage, true)
    }
    cpage++;
}
function cbs(data){
    console.log(data);
    data = JSON.parse(data);
    let len = data.length;
    if(len > 0){
        for(let i = 0; i < len; i++){
            let oList = document.createElement('div');
            oList.className = 'item';
            let Img = new Image();
            Img.src = data[i].image;
            Img.style.height = (230*data[i].height/data[i].width) + 'px';
            let oP = document.createElement('p');
            oP.innerHTML = data[i].title;
            oList.appendChild(Img);
            oList.appendChild(oP);
            oLi[ findMin(oLi) ].appendChild(oList);
        }
        flag = !flag;
    }else {
        alert('加载结束')
    }
}
Start();
window.onscroll = function (){
    let index = findMin(oLi);
    let minHeight = oLi[index].offsetHeight;
    let scollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(scollHeight + clientHeight > minHeight ){
        Start();
    }
}
