let val = 1;
let valchange = (num = 0) => {
    val = val + num;
    if(val <= 1){
        val = 1;
        $('.reduce').addClass('min');
    }else if(val >= 20 ){
        val = 20;
        $('.sum').addClass('min');
    }else {
        $('.min').removeClass('min')
    }
    $('input').val(val);
}
$('.reduce').add('.sum').click( function (){ //不能用箭头函数 不然this指向window
    if( $(this).hasClass('reduce') ){
        valchange(-1);
    } else {
        valchange(1);
    } 
});
$('input').change(()=>{
    val = parseInt( $('input').val() );
    valchange();
})