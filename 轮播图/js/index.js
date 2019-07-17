let index = 0;
let imgWidth = 1000;
let num = 4;
let timer = null;
window.onload = ()=>{
    timerFun()
};
$('.wrapper').hover(function (){
    $('.left').add('.right').css({
        'background-color': 'rgba(233, 233, 233, 0.5)',
        'color': '#fff'
    })
}, function(){
    $('.left').add('.right').css({
        'background-color': '',
        'color': '#ddd'
    })
})
$('.left').add('.right').on('click', function(){

    if($(this).hasClass('left')){

        Move(-1);
    }else {
        Move(1);
    }
    
});
$('.radio-box ul li').on('click', function(){
    index = $(this).index();
    Move('');
})
function radioChange(dom){
    $('.show').removeClass('show');
    dom.addClass('show');
}
function Move(a) {
    clearInterval(timer);
    $('.box').stop(false, true);
    if(a == -1){
        index--;
        if(index < 0){
            index = 3;
            $('.box').css({
                left: '-4000px' 
            })
        }
    }else if( a == 1){
        index++;
        if(index > num){
            index = 1;
            $('.box').css({
                left: 0 
            })
        }
    }
    $('.box').animate({
        left: -index * imgWidth,
    }, function(){
        timerFun();
    })
    radioChange($('.radio-box ul li').eq(index == num ? 0 : index));
}
function timerFun(){
    timer = setTimeout(function(){
        Move(1);
    }, 3000)
}