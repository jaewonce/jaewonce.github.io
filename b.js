$('#tothetop').click(function () {
    var htmloffset = $('html').offset();
    $('html, body').animate({
        scrollTop: htmloffset.top
    }, 400);
});
