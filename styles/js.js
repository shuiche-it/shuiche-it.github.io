/*获取ScrollTop*/
function getScrollTopOfBody() {
    var scrollTop;
    if (typeof window.pageYOffset != 'undefined') {
        scrollTop = window.pageYOffset;
    }
    else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
        scrollTop = document.documentElement.scrollTop;
    } else if (typeof document.body != 'undefined') {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
var goTopBtn = document.getElementById('goTop');
window.onscroll = function () {
    var newScrollTop = getScrollTopOfBody();
    if (newScrollTop == 0) {
        goTopBtn.style.bottom = -50 + 'px';
    }
    else {
        goTopBtn.style.bottom = 50 + 'px';
    }
};

$("#goTop").click(function () {
    $('body,html').animate({scrollTop: 0}, 1000);
    return false;
});