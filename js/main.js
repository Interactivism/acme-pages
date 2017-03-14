$(function(){
  $('.versions-list').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('closed');
  });

  $('.submenu__title').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('closed');
  });

  $('.search-input').focusin(function() {
    $(this).parent().addClass('active');
  });

  $('.search-input').focusout(function() {
    $(this).parent().removeClass('active');
  });

  $('.guides-menu').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('opened');
  });
});