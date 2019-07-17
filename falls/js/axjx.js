
function axjx(method, url, callback, data, flag){
    //2，ajxa对象
    let xml = null;
    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest();
    }else {
        xml = new ActiveXObject('Microsoft.XMLHttp');
    }
    //3. 初始化 HTTP 请求参数（ 请求方式，地址，同步异步）
    //4. 发送请求
    method = method.toUpperCase(); //
    if(method == 'GET'){
        let date = new Date();
        let timer = date.getTime();
        xml.open(method, url + '?' + data + '&timer=' + timer, flag);
        xml.send();
    }else if(method == 'POSt'){
        xml.open(method, url, flag);
        xml.setRequesHeader('content-Type', 'application/x-www-form-urlencoded');
        xml.send(data);
    }
    //5，监控数据
    // 0 － （未初始化）还没有调用send()方法 
    // 1 － （载入）已调用send()方法，正在发送请求 
    // 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容 
    // 3 － （交互）正在解析响应内容 
    // 4 － （完成）响应内容解析完成，可以在客户端调用了
    xml.onreadystatechange = function (){
        if(xml.readyState == 4){
            //6，检查数据 使用
            if(xml.status == 200){
                callback(xml.responseText);
            }
        }
    }
}
