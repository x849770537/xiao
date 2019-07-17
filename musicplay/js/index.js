var oplayTime = document.getElementById("playTime"),
    Alltime = document.getElementById("allTime"),
    oAudio = document.getElementById("Audio"),
    musicImg = document.getElementById("Img"),
    playBut = document.getElementById("play-but"),
    proActive = document.getElementsByClassName("progress-active")[0],
    radioBox = document.getElementsByClassName("radio-box")[0],
    Sound = document.getElementsByClassName("sound")[0],
    soundBox = document.getElementsByClassName("sound-box")[0],
    bvolumeBox = document.getElementsByClassName("volume-box")[0],
    soundBnt = document.getElementsByClassName("soundbnt")[0],
    nextSong = document.getElementsByClassName("nextsong")[0],
    lastSong = document.getElementsByClassName("lastsong")[0],
    volumeBut = document.getElementsByClassName("volume")[0],
    Volumenum = document.getElementsByClassName("volumenum")[0],
    songName = document.getElementsByClassName("songsname")[0],
    Progress = document.getElementsByClassName("progress")[0],
    voiceBox = document.getElementsByClassName("voice-box")[0],
    volumeOoffBnt = document.getElementById("volume-offbnt");
var timer,times,nowvolume,imgRun;
var songsnumber = 0,imgnumber = 0;
var Songs =["海阔天空.flac","空空如也1.flac","光辉岁月.flac","蓝皮鼠和大脸猫.mp3"];
var SongsName = [];
for(var i = 0; i < Songs.length; i++ ){
    if(Songs[i].indexOf(".flac") > -1){
        SongsName[i] = Songs[i].replace(/.flac/g, "");
    }else if(Songs[i].indexOf(".mp3")){
        SongsName[i] = Songs[i].replace(/.mp3/g, "");
    }
}
function init(){
    oAudio.oncanplay=function (){
        oplayTime.innerHTML = Timeconvert(oAudio.currentTime);
        times = oAudio.duration;
        Alltime.innerHTML = Timeconvert(times);
        oAudio.volume = 0.5;
    };
    // console.log(songsnumber);
    playBut.onmouseup = function () {
        if(oAudio.paused){
            musicPlay();
        }else {
            musicPause();
        };
    };
    lastSong.onclick = function(){
        musicChange(1);
        musicPlay();
    };
    nextSong.onclick = function (){
        musicChange(-1);
        musicPlay();
    };
    oAudio.onended = function (){
        nextSong.onclick();
    };
    radioBox.onmousedown = function() {
        var c = oAudio.currentTime;
        clearInterval(timer);
        clearInterval(imgRun);
        document.body.onmousemove = function(){
            var newWidth = event.clientX - Progress.getBoundingClientRect().left;
            if(newWidth < 0) {
                newWidth = 0;
            }else if(newWidth > 320) {
                newWidth = 320;
            }
            proActive.style.width= newWidth + "px"; 
            c = ((newWidth) / 320) *times;
            oplayTime.innerHTML = Timeconvert(c); 
        };
        document.body.onmouseup = function(){
            document.body.onmousemove = null;
            document.body.onmouseup = null;
            oAudio.currentTime = c;
            musicPlay();
        };
    };
    Sound.onmouseover = function (){
        soundBox.style.display = "block";
    }
    Sound.onmouseout = function (){
        volumenone();
    };
    volumeBut.onmousedown = function(){
        document.body.onmousemove = function(){
            Sound.onmouseout = null;
            var newHeight =108 - parseInt(event.clientY - voiceBox.getBoundingClientRect().top);
            if(newHeight < 0){
                newHeight = 0;
            }else if(newHeight > 100){
                newHeight = 100;
            }
            console.log(newHeight);
            bvolumeBox.style.height= newHeight + "px";
            console.log(bvolumeBox.style.Height);
            Volumenum.innerHTML = newHeight + "%";
            oAudio.volume = newHeight / 100;
            if(newHeight === 0){
                soundBnt.className = "iconfont icon-jingyin soundbnt";
                volumeOoffBnt.className = "iconfont icon-jingyin";
            }else {
                soundBnt.className = "iconfont icon-shengyin soundbnt";
                volumeOoffBnt.className = "iconfont icon-shengyin";
            }
        }
        document.body.onmouseup = function(){
            document.body.onmousemove = null;
            document.body.onmouseup = null;
            Sound.onmouseout = function(){
                volumenone();
            };
            setTimeout(volumenone,1000);
        }  
    }
    volumeOoffBnt.onclick = function(){
        onVolume();
    }
    Progress.onclick = function (){
        var c = oAudio.currentTime;
        clearInterval(timer);
        clearInterval(imgRun);
        var newWidth = event.clientX - Progress.getBoundingClientRect().left;
        proActive.style.width= newWidth + "px" 
        c = ((newWidth) / 320) *times;
        oplayTime.innerHTML = Timeconvert(c); 
        oAudio.currentTime = c;
        musicPlay();
    }
};
init();
function onVolume(){
    if(oAudio.volume != 0){
        nowvolume = oAudio.volume;
        oAudio.volume = 0;
        soundBnt.className = "iconfont icon-jingyin soundbnt";
        volumeOoffBnt.className = "iconfont icon-jingyin";
        bvolumeBox.style.height= 0 + "px";
        Volumenum.innerHTML = "0%";
    }else {
        oAudio.volume = nowvolume;
        soundBnt.className = "iconfont icon-shengyin soundbnt";
        volumeOoffBnt.className = "iconfont icon-shengyin";
        bvolumeBox.style.height= nowvolume*100 + "px";
        Volumenum.innerHTML = nowvolume*100 + "%";
    };
}
radioBox.onclick = function(){
    event.stopPropagation();
};
volumeBut.onclick = function(){
    event.stopPropagation();
};
function Timeconvert(time) {
    var sec = parseInt(time % 60) < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60);
    var min = parseInt(time / 60) < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60);
    return min + ":" + sec;
}
function musicPlay(){
    songName.innerHTML = SongsName[songsnumber];
    musicImg.src = "./img/" + SongsName[songsnumber] + ".jpg";
    document.body.style.backgroundImage = "url(./img/" + songsnumber + ".jpg)";
    oAudio.play();
    playBut.className = "iconfont icon-timeout";
    timer = setInterval(PlayTime, 200);
    imgRun= setInterval(Runimg,100);
} 
function musicPause() {
    oAudio.pause();
    playBut.className = "iconfont icon-play-circle";
    clearInterval(timer);
    clearInterval(imgRun);
}
function PlayTime(){
    oplayTime.innerHTML = Timeconvert(oAudio.currentTime);
    proActive.style.width = (oAudio.currentTime/times * 320) + "px";   
};
function musicChange(num){
    imgnumber = 0;
    musicImg.style.transform = "rotate(0deg)";
    clearInterval(timer);
    clearInterval(imgRun);
    songsnumber += num;
    if(songsnumber < 0){
        songsnumber = Songs.length-1;
    }else if(songsnumber > Songs.length){
        songsnumber = 0;
    };
    oAudio.src = "./song/" + Songs[songsnumber];
    oAudio.load();
}
function volumenone(){
    soundBox.style.display = "none";
};
function Runimg(){
    musicImg.style.transform = "rotate(" + imgnumber + "deg)";
    imgnumber +=1;
}


