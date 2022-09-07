//모달 팝업 닫기 버튼
const closeBtn = document.querySelector('.close');
const elPopup = document.querySelector('#popup');

closeBtn.onclick = function(aa){
    aa.preventDefault();            //a태그의 기본기능이 안되게 함
    elPopup.style.display = "none"; 
}

var aa = 0;        //변수 aa에 0을 넣는다.(toggle ul가 안보이는 상태)

$('.toggle').click(function(){
    if(aa == 0){
        $('.toggle ul').show();
        aa = 5;
    } else {                     //.toggle ul가 보이는 상태
        $('.toggle ul').hide();
        aa = 0;
    }
    
});

//스크롤 시 헤더 bottom 고정
const bottomTop = $('.bottom').offset().top;
$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if(scroll >= bottomTop){
        $('.bottom').addClass('stick')
    } else {
        $('.bottom').removeClass('stick')
    }

})
