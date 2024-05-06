$( function () { /* document.ready */

    // 漢堡按鈕
    $('.hamburger').click(function () {
        // 交換漢堡按鈕跟X
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });

    // 滑動到指定位子
    $('.menu a').click(function () {
        var btn = $(this).attr('href'); /* this=按的那個a */
        var pos = $(btn).offset();
        $('html,body').animate({ scrollTop: pos.top }, 1500); /* scrolltop到pos的top，1500毫秒*/
    });

    // 至頂按鈕

    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });

    // 淡出淡入

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {

            $('#gotop').stop().fadeTo('', 1);

        } else { $('#gotop').stop().fadeOut(); }

    });
    // 移除背景影片
    if ($(window).width() < 821) {
        $('#about video').remove();
    }

});

// smoove 要單獨在外面
$('.smoove').smoove({
    offset: '40%', /* 數字不用引號 百分比要 */

});

