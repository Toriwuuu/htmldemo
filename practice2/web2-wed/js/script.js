$(function () { /* document.ready */

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
});

// smoove
$('.smoove').smoove({
    offset:'40%', /* 數字不用引號 百分比要 */
});