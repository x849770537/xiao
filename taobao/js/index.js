//https://suggest.taobao.com/sug?code=utf-8&q=123&_ksTS=1550032773726_884&callback=jsonp885&k=1&area=c2c&bucketid=8
let oInput = document.getElementsByTagName('input')[0];
let oUl = document.getElementsByClassName('list')[0];
oInput.oninput = function(e){
    let val = oInput.value;
    let oscript = document.createElement('script');
    oscript.src = 'https://suggest.taobao.com/sug?q=' + val +'&callback=cbs';
    document.body.appendChild(oscript);
    oscript.remove();
}
function cbs(data){
    console.log(data)
    let src = '';
    if(data.result.length > 0){
        oUl.style.display = 'block';
        data.result.forEach(ele => {
            src += '<li>' + ele[0] + '</li>'
        });
        oUl.innerHTML = src;
    }else {
        oUl.style.display = 'none';
    }
}