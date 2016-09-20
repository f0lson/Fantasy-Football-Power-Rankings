var $menu = $('#menu');
var $menuIcon = $('.fa-calendar');
var $menuClose = $('.close-menu');
var $modal = $('<div id="modal"></div>');
var $body = $('body');

$('body').append($modal);

$menuIcon.click(function(e){
    e.preventDefault();
    if($menu.is(':visible')) {
        $menu.hide('fast');
        $modal.slideUp('fast');
    } else {
        $menu.show('fast');
        $menu.css('display', 'flex');
        $modal.slideDown('fast');
    }
});

$menuClose.click(function(e){
    e.preventDefault();
    $menu.hide('fast');
    $modal.slideUp('fast');
});

$modal.click(function(e){
    e.preventDefault();
    $menu.hide('fast');
    $modal.slideUp('fast');
});


var $stickyNav = $('#nav-bar');
var $header = $('header').height();
var fixedNav = 'fixedNav';
var $powerRankings = $('#power-rankings');

$(window).scroll(function(){
    if( $(this).scrollTop() > $header ) {
        $stickyNav.addClass(fixedNav);
        $powerRankings.addClass('fixedNavMargin');
        $('#top').css('display', 'inline-block')
    } else {
        $stickyNav.removeClass(fixedNav);
        $powerRankings.removeClass('fixedNavMargin');
        $('#top').css('display', 'none');
    }
});

$('#top').click(function(){
    $('html,body').animate({
        scrollTop : $($powerRankings).position().top
    });
});
