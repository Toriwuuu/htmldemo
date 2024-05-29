$( function () {

    // 漢堡按鈕
    $('.hamburger').click(function(){
        // 交替 三 跟 X
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
        $('.navigation').toggleClass('hide');
    });


    // 滑動到指定位置
    $('.menu a').click(function () {

        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({ scrollTop: pos.top }, 1500);

    });

    // 置頂按鈕
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });

    // 淡出淡入
    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {

            $('#gotop').stop().fadeTo('', 1);

        } else {
            $('#gotop').stop().fadeOut();
        }

    });

    // 移除背景影片
    if( $(window).width() < 821 ){
        $('#about video').remove();
    }

});

// jquery smoove 一定要單獨寫在外面
    $('.smoove').smoove({
        offset: '30%'
    });