$('#tothetop').click(function () {
    var htmloffset = $('html').offset();
    $('html, body').animate({
        scrollTop: htmloffset.top
    }, 400);
});
$('#tobu1-div').hide();
$('#tobu1').click(function () {
    //要素を隠す
    $('#tobu1-div').fadeToggle();
    $('#tobu1').text($('#tobu1').text() == 'Secretary Department' ? "書記部門" : 'Secretary Department');

});

$('#tobu2-dl').hide();
$('#tobu2').click(function () {
    //要素を隠す
    $('#tobu2-dl').fadeToggle();
    $('#tobu2').text($('#tobu2').text() == 'General Managing Department' ? "総括部門" : 'General Managing Department');

});

$('#tobu3-dl').hide();
$('#tobu3').click(function () {
    //要素を隠す
    $('#tobu3-dl').fadeToggle();
    $('#tobu3').text($('#tobu3').text() == 'Sanitary Department' ? "衛生部門" : 'Sanitary Department');

});

$('#tobu4-dl').hide();
$('#tobu4').click(function () {
    //要素を隠す
    $('#tobu4-dl').fadeToggle();
    $('#tobu4').text($('#tobu4').text() == 'Japanese Step Department' ? "日スタ" : 'Japanese Step Department');

});

$('#tobu5-dl').hide();
$('#tobu5').click(function () {
    //要素を隠す
    $('#tobu5-dl').fadeToggle();
    $('#tobu5').text($('#tobu5').text() == 'EVENT Department' ? "イベント部門" : 'EVENT Department');

});

$('#tobu6-dl').hide();
$('#tobu6').click(function () {
    //要素を隠す
    $('#tobu6-dl').fadeToggle();
    $('#tobu6').text($('#tobu6').text() == 'PR Department' ? "PR部門" : 'PR Department');

});

$('#tobu7-div').hide();
$('#tobu7').click(function () {
    //要素を隠す
    $('#tobu7-div').fadeToggle();
    $('#tobu7').text($('#tobu7').text() == 'Photography department' ? "記録部門" : 'Photography department');

});

$('#tobu8-dl').hide();
$('#tobu8').click(function () {
    //要素を隠す
    $('#tobu8-dl').fadeToggle();
    $('#tobu8').text($('#tobu8').text() == 'Store Managing Department' ? "店責部門" : 'Store Managing Department');

});

$('#tobu9-div').hide();
$('#tobu9').click(function () {
    //要素を隠す
    $('#tobu9-div').fadeToggle();
    $('#tobu9').text($('#tobu9').text() == 'KIFEST Department' ? "キフェス" : 'KIFEST Department');

});

$('#tobu10-dl').hide();
$('#tobu10').click(function () {
    //要素を隠す
    $('#tobu10-dl').fadeToggle();
    $('#tobu10').text($('#tobu10').text() == 'General Department' ? "一般部門" : 'General Department');

});

$('#tobu11-dl').hide();
$('#tobu11').click(function () {
    //要素を隠す
    $('#tobu11-dl').fadeToggle();
    $('#tobu11').text($('#tobu11').text() == 'construction Department' ? "特設部門" : 'construction Department');

});

$('#tobu12-dl').hide();
$('#tobu12').click(function () {
    //要素を隠す
    $('#tobu12-dl').fadeToggle();
    $('#tobu12').text($('#tobu12').text() == 'Accounting Department' ? "会計部門" : 'Accounting Department');

});

